import { Link } from "@tanstack/react-router";

export function Banners() {
  return (
    <>
      <span className="border-2 border-yellow-300 bg-yellow-200 w-full text-center p-2 flex flex-row items-center justify-center gap-2">
        <span className="font-bold">1 New Message:</span>
        <Link
          to="/"
          className="flex flex-row items-center gap-1 hover:underline"
        >
          <img src="/images/icons/mail.svg" alt="New Message" className="w-5" />
          From Elegant Totality.
        </Link>
      </span>
      <span className="border-2 border-blue-300 bg-blue-200 w-full text-center p-2 flex flex-row items-center justify-center gap-2">
        <span className="font-bold">Success Message:</span>
        <span>Success message text.</span>
      </span>
      <span className="border-2 border-red-300 bg-red-200 w-full text-center p-2 flex flex-row items-center justify-center gap-2">
        <span className="font-bold">Warning Message:</span>
        <span>Warning message text.</span>
      </span>
      <span className="border-2 border-amber-300 bg-amber-200 w-full text-center p-2 flex flex-row items-center justify-center gap-2">
        <span className="font-bold">Banner News Header:</span>
        <span>News Content</span>
      </span>
      <span className="border-2 border-lime-300 bg-lime-200 w-full text-center p-2 flex flex-row items-center justify-center gap-2">
        <span className="font-bold">Banner News Header 2:</span>
        <span>News Content</span>
      </span>
    </>
  );
}
