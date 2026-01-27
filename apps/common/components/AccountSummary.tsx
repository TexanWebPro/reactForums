export function AccountSummary() {
  return (
    <div className="w-full bg-stone-200 flex flex-col rounded-lg text-sm">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Account Summary
      </span>
      <div className="flex flex-row items-center justify-between text-sm p-4 border-2 border-t-0 border-stone-500 bg-stone-200 rounded-b-lg">
        <span className="flex flex-row items-center justify-around gap-4">
          <img
            src="/images/default_avatar.jpg"
            alt="Elegant Totality Avatar"
            className="w-28 border-2 border-stone-300"
          />
          <span className="flex flex-col items-start">
            <span className="text-lg text-green-800 font-bold">
              Elegant Totality
            </span>
            <span className="flex flex-row items-center justify-between gap-1 mb-4">
              <img src="images/star.png" alt="star" />
              <img src="images/star.png" alt="star" />
              <img src="images/star.png" alt="star" />
              <img src="images/star.png" alt="star" />
              <img src="images/star.png" alt="star" />
              <img src="images/star.png" alt="star" />
              <img src="images/star.png" alt="star" />
            </span>
            <p>
              <span className="font-bold">Email:</span> moses@texanwebpro.com
            </p>
            <p>
              <span className="font-bold">Primary User Group:</span>{" "}
              Administrator
            </p>
            <p>
              <span className="font-bold">Registration Day:</span> 09-05-2025,
              1:10 AM
            </p>
            <p>
              <span className="font-bold">Referral Link:</span>{" "}
              https://website.com/register?referrer={"{userId}"}
            </p>
          </span>
        </span>
        <span className="text-sm">
          <span>
            <p>
              <span className="font-bold">Replies:</span> 145
            </p>
            <p>
              <span className="font-bold">Topics:</span> 55
            </p>
            <p>
              <span className="font-bold">Reputation:</span>{" "}
              <span className="font-bold text-green-700">+12</span>
            </p>
            <p>
              <span className="font-bold">Members Referred:</span>{" "}
              <span className="font-bold">23</span>
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
