import { Link } from "@tanstack/react-router";

export function Button(props: {
  text: string;
  linkTo: string;
  params?: any;
  icon?: "thumbsUp" | "thumbsDown";
}) {
  const { text, linkTo, params, icon } = props;
  return (
    <>
      <Link
        to={linkTo}
        params={params}
        className="font-bold text-stone-100 border-2 border-sky-800 bg-sky-600 hover:bg-sky-500 text-center p-2 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base"
      >
        {icon ? (
          <>
            {icon === "thumbsUp" ? (
              <>
                <img
                  src="/images/icons/thumbs-up.svg"
                  alt="Thumbs Up"
                  className="w-6"
                />
              </>
            ) : (
              <>
                <img
                  src="/images/icons/thumbs-down.svg"
                  alt="Thumbs Down"
                  className="w-6"
                />
              </>
            )}
          </>
        ) : (
          <></>
        )}
        {text}
      </Link>
    </>
  );
}
