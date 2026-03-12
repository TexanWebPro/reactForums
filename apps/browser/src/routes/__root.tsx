/// <reference types="vite/client" />
import * as React from "react";
import {
  HeadContent,
  Scripts,
  createRootRoute,
  useMatches,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Layout } from "@/components/layout";
import appCss from "@/styles/app.css?url";
import { seo } from "@/utils/seo";
import { SettingKey } from "@reactforums/core";
import { AdminLayout } from "@/components/layout/admin";

export const Route = createRootRoute({
  head: async () => {
    const seoTitleResult = await fetch(
      `/api/settings/query/by-name?name=${SettingKey.SiteMetaTitle}`,
    );
    const seoTitle = await seoTitleResult.json();
    const seoDescriptionResult = await fetch(
      `/api/settings/query/by-name?name=${SettingKey.SiteMetaDescription}`,
    );
    const seoDescription = await seoDescriptionResult.json();
    const faviconResult = await fetch(
      `/api/settings/query/by-name?name=${SettingKey.FaviconUrl}`,
    );
    const faviconUrl = await faviconResult.json();

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        ...seo({
          title: `${seoTitle?.value}`,
          description: `${seoDescription?.value}`,
        }),
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${faviconUrl?.value}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
        { rel: "icon", href: "/favicon.ico" },
      ],
      scripts: [
        {
          src: "/customScript.js",
          type: "text/javascript",
        },
      ],
    };
  },
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const useAdminLayout = useMatches({
    select: (matches) =>
      !matches.some((m) => m.staticData?.adminLayout === true),
  });

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {useAdminLayout ? (
            <Layout>{children}</Layout>
          ) : (
            <AdminLayout>{children}</AdminLayout>
          )}
          <TanStackRouterDevtools position="bottom-right" />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  );
}
