export function ModerationQueue() {
  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          Moderation Queue
        </span>
        <div className="flex flex-row items-center justify-between text-sm p-4 border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg">
          <p className="flex flex-col">
            <span>Pending Approvals: 3</span> <span>Reports: 5</span>
            <span>Draft Posts: 12</span>
          </p>
        </div>
      </div>
    </>
  );
}
