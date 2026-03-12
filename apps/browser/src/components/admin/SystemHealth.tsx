export function SystemHealth() {
  return (
    <>
      <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
        <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
          System Health
        </span>
        <div className="flex flex-row items-center justify-between text-sm p-4 border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg">
          <p className="flex flex-col">
            <span>DB latency 14ms</span>
            <span>Queue backlog 0 jobs</span>
            <span>Storage usage 34%</span>
            <span>Cache hit rate 92%</span>
          </p>
        </div>
      </div>
    </>
  );
}
