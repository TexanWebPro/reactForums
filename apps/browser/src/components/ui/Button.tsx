import { Link } from "@tanstack/react-router";

export function Button(props: { text: string; linkTo: string; params?: any }) {
  const { text, linkTo, params } = props;
  return (
    <>
      <Link
        to={linkTo}
        params={params}
        className="font-bold text-stone-100 border-2 border-sky-800 bg-sky-600 hover:bg-sky-500 text-center p-2 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base"
      >
        {text}
      </Link>
    </>
  );
}
