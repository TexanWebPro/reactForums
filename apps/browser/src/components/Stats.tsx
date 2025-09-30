import { Link } from "@tanstack/react-router";

export function Stats() {
  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 text-lg border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          Board Statistics
        </span>

        <div className="p-4 border-2 border-stone-300 rounded-b-lg flex flex-col items-start justify-between text-sm gap-2">
          <p>
            Our members have made a total of 1,243,148 replies in 177,547
            topics.
          </p>
          <p>We currently have 4,136,121 members registered.</p>
          <p>
            Please welcome our newest member,{" "}
            <Link to="/" className="text-sky-700 font-bold">
              Elegant Totality
            </Link>
          </p>
          <p>
            The most users online at one time was 42,749 on 2025-01-22 at 05:27
            PM
          </p>
        </div>
      </div>
    </>
  );
}
