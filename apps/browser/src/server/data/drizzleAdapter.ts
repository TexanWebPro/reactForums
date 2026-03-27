import {
  defaultSchema,
  drizzlePgAdapter,
} from "@reactforums/adapter-drizzle-pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Signer } from "@aws-sdk/rds-signer";
import { awsCredentialsProvider } from "@vercel/functions/oidc";
import { attachDatabasePool } from "@vercel/functions";

function createPool() {
  // AWS IAM (only if configured)
  if (process.env.AWS_ROLE_ARN) {
    const signer = new Signer({
      hostname: process.env.PGHOST!,
      port: Number(process.env.PGPORT),
      username: process.env.PGUSER!,
      region: process.env.AWS_REGION!,
      credentials: awsCredentialsProvider({
        roleArn: process.env.AWS_ROLE_ARN!,
        clientConfig: { region: process.env.AWS_REGION! },
      }),
    });

    return new Pool({
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      database: process.env.PGDATABASE,
      password: () => signer.getAuthToken(),
      port: Number(process.env.PGPORT),
      ssl: { rejectUnauthorized: false },
    });
  }

  // Standard (local, Docker, etc.)
  if (process.env.DATABASE_URL) {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  return new Pool({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  });
}

const pool = createPool();
attachDatabasePool(pool);

export const db = drizzle(pool, { schema: defaultSchema });

export const repository = drizzlePgAdapter({ db });
