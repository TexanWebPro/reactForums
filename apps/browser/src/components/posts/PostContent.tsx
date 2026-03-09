import { User } from "@reactforums/core";
import { useQuery } from "@tanstack/react-query";

export function PostContent(props: {
  createdAt: Date;
  editUserId: number | null;
  updatedAt?: Date;
  content: string;
}) {
  const { createdAt, editUserId, updatedAt, content } = props;

  return (
    <>
      <span className="m-4 text-xs border-b-2 border-stone-400">
        {new Date(createdAt).toDateString()}
        {editUserId && updatedAt ? (
          <>
            <EditLine editUserId={editUserId!} updatedAt={updatedAt!} />
          </>
        ) : (
          <></>
        )}
      </span>

      <div className="p-4 text-base">{content}</div>
    </>
  );
}

function EditLine(props: { editUserId: number; updatedAt: Date }) {
  const { editUserId, updatedAt } = props;
  async function fetchUserById(id: number): Promise<User> {
    const res = await fetch(
      `/api/users/query/by-id?id=${encodeURIComponent(id)}`,
    );
    const body = await res.json().catch(() => null);

    if (!res.ok)
      throw new Error(body?.error ?? `Request failed (${res.status})`);
    return body as User;
  }

  const { data: userInfo } = useQuery({
    queryKey: [`user-${editUserId}`],
    queryFn: async () => {
      const res = await fetchUserById(editUserId);
      return res;
    },
  });

  if (!userInfo) return;

  return (
    <>
      {editUserId && updatedAt ? (
        <>
          {" "}
          (This post was last modified: {new Date(
            updatedAt,
          ).toDateString()} by {userInfo.username}.)
        </>
      ) : (
        <></>
      )}
    </>
  );
}
