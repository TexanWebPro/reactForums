import { userQueries } from "@/features/users/users.query";
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

  const { data: userInfo } = useQuery({
    ...userQueries.byId(editUserId),
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
