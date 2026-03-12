export function CommunityOverview() {
  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          Community Overview
        </span>
        <div className="grid grid-cols-3 items-center justify-between text-sm p-4 border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg">
          <span className="flex flex-col items-center justify-between">
            <span className="font-bold">Users</span>
            <span>12,345</span>
          </span>
          <span className="flex flex-col items-center justify-between">
            <span className="font-bold">Threads</span>
            <span>2,031</span>
          </span>
          <span className="flex flex-col items-center justify-between">
            <span className="font-bold">Posts</span>
            <span>10,128</span>
          </span>
        </div>
      </div>
    </>
  );
}
