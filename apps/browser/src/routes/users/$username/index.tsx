// import { profileFieldsService, userService } from "@/api/client";
import { userQueries } from "@/features/users/users.query";
import { formatDateTimeForUserProfile } from "@reactforums/common/utils/dates";
import { reputationClassStyle } from "@reactforums/common/utils/reputation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$username/")({
  loader: async ({ params }) => {
    return { params };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { params } = Route.useLoaderData();

  const { data } = useQuery({
    ...userQueries.byUsername(params.username),
  });

  // TODO: redirect
  if (!data) return;

  return (
    <div>
      <span className="text-sm font-bold flex flex-row items-center justify-start gap-2 pb-4">
        <Link to="/">rF Community Forums</Link>
        <p>{`-> Profile of ${data.username}`}</p>
      </span>

      <div>
        <div className="flex flex-row items-center justify-between text-sm p-4 border-2 border-stone-200">
          <span className="flex flex-col items-start">
            <span className="text-2xl text-green-800 font-bold">
              {data.username}
            </span>
            <span className="italic">{data.userTitle}</span>
            <span className="flex flex-row items-center justify-between gap-1 mb-4">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
            </span>
            <span>
              <p>
                <span className="font-bold">Registration Date:</span>{" "}
                {formatDateTimeForUserProfile(data.registrationDate)}
              </p>
              <p>
                <span className="font-bold">Date of Birth:</span> 01-01-1975 (50
                years old)
              </p>
              <p>
                <span className="font-bold">Local Time:</span> 09-05-2025 at
                08:26 PM
              </p>
              <p>
                <span className="font-bold">Status:</span>{" "}
                <span className="text-green-800 font-bold">Online</span>{" "}
                (Viewing Profile of Elegant Totality @ 08:25 PM)
              </p>
            </span>
          </span>
          <span className="border-2 border-stone-900">
            <img
              src="/images/default_avatar.jpg"
              alt={`${data.username} Avatar`}
            />
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-8 text-sm w-full justify-items-center">
          <div className="border-2 border-stone-200 rounded-lg w-full">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              {data.username}'s Forum Info
            </div>
            <div className="px-4 py-2">
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Joined Date:</span>{" "}
                {formatDateTimeForUserProfile(data.registrationDate)}
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Last Visit:</span> 1 Day Ago
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Total Posts:</span> {data.postCount}
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Total Threads:</span>{" "}
                {data.threadCount}
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Time Spent Online:</span> 2 Minutes,
                17 Seconds
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Members Referred:</span> 12
              </div>
              <div className="border-b-2 border-stone-200 p-2">
                <span className="font-bold">Reputation:</span>{" "}
                <Link
                  to="/users/$username/reputation"
                  params={{ username: data.username }}
                  className={`font-bold ${reputationClassStyle(data.reputation)}`}
                >
                  {data.reputation}
                </Link>
              </div>
              <div className="p-2">
                {/* TODO: Viewable only to Mods and Admins */}
                <span className="font-bold">Warning Level:</span>{" "}
                <span className="font-bold text-red-700">
                  {data.warningPoints}
                </span>
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              {data.username}'s Signature
            </div>
            <div className="px-4 py-4">{data.signature}</div>
          </div>

          {/* {data.profileFields.length > 0 ? (
            <>
              <CustomProfileFields {...data} />
            </>
          ) : (
            <></>
          )} */}

          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              {data.username}'s Contact Info
            </div>
            <div className="px-4 py-2">
              <div className="p-2">
                <span className="font-bold">Website:</span> {data.website}
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Moderator Options
            </div>
            <div className="px-4 py-2">
              <div className="p-2 flex flex-col border-b-2 border-stone-200">
                <span>
                  <span className="font-bold">Registration IP:</span>{" "}
                  {data.registrationIp}
                </span>
                <span>
                  <span className="font-bold">Last Known IP:</span>{" "}
                  {data.lastIp}
                </span>
              </div>
              <div className="p-2 flex flex-col border-b-2 border-stone-200">
                <span>
                  <Link to="/mod-dashboard" className="font-bold">
                    Edit this user in Mod CP
                  </Link>
                </span>
                <span>
                  <Link to="/mod-dashboard" className="font-bold">
                    Ban this user in Mod CP
                  </Link>
                </span>
              </div>
              <div className="p-2 flex flex-col">
                <span>
                  <span className="">
                    There are currently no notes on this user
                  </span>
                </span>
                <span>
                  <Link to="/mod-dashboard" className="font-bold">
                    Edit user notes in Mod CP
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
            <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
              Admin Options
            </div>
            <div className="p-2 flex flex-col border-b-2 border-stone-200">
              <span>
                <Link to="/admin" className="font-bold">
                  Edit this user in Admin CP
                </Link>
              </span>
              <span>
                <Link to="/admin" className="font-bold">
                  Ban this user in Admin CP
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function CustomProfileFields(user: UserWithProfileFieldValues) {
//   return (
//     <>
//       <div className="border-2 border-stone-200 rounded-lg w-full max-h-fit">
//         <div className="bg-sky-700 p-4 text-neutral-50 font-bold rounded-t-lg">
//           Additional Info About {user.username}
//         </div>
//         <div className="px-4 py-2">
//           {user.profileFields.map((field, i) => {
//             const fieldData = profileFieldsService.getProfileFieldValue(
//               field.fieldId
//             );
//             if (!fieldData) return;
//             return (
//               <>
//                 <div
//                   className={`border-stone-200 p-2 ${i === user.profileFields.length - 1 ? "" : "border-b-2"}`}
//                 >
//                   <span className="font-bold">{fieldData.name}:</span>{" "}
//                   {field.value}
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
