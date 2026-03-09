import { Link } from "@tanstack/react-router";

export function PostOptions(props: {
  website: string | null;
  userId: number;
  postId: number;
}) {
  const { website, userId, postId } = props;

  return (
    <div className="border-t-2 border-stone-400 p-4 flex flex-row items-center justify-between gap-2">
      <span className="flex flex-row justify-between items-center gap-2 w-1/5">
        {website ? (
          <a
            href={`https://${website}`}
            target="_blank"
            className="flex flex-row items-center justify-center gap-1 p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center w-full rounded-lg text-sm"
          >
            <img
              src="/images/icons/globe-alt.svg"
              alt="Website"
              className="w-5"
            />
            Website
          </a>
        ) : (
          <></>
        )}
        <Link
          to="/search"
          className="flex flex-row flex-nowrap items-center justify-center w-full max-w-32 p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img
            src="/images/icons/magnifying-glass.svg"
            alt="Find Posts"
            className="w-5"
          />
          Find Posts
        </Link>
      </span>
      <span className="flex flex-row justify-between items-center gap-2">
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img src="/images/icons/pencil.svg" alt="Edit" className="w-5" />
          Edit
        </Link>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img src="/images/icons/x-mark.svg" alt="Delete" className="w-5" />
          Delete
        </Link>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img
            src="/images/icons/chat-bubble-left-ellipsis.svg"
            alt="Reply"
            className="w-5"
          />
          Reply
        </Link>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-1 w-full p-2 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center rounded-lg text-sm"
        >
          <img
            src="/images/icons/chat-bubble-left-right.svg"
            alt="Quote"
            className="w-5"
          />
          Quote
        </Link>
      </span>
    </div>
  );
}
