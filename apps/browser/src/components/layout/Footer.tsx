import { Link } from "@tanstack/react-router";
import Edges from "./Edges";
import { settingsService } from "@/api/client";
import { SettingKey } from "@reactforums/core";

export default function Footer() {
  const homepageName = settingsService.getByName(SettingKey.HomepageName);
  const homepageUrl = settingsService.getByName(SettingKey.HomepageUrl);

  return (
    <>
      <Edges className="w-full flex flex-col items-center justify-between gap-2 mt-4 text-sm">
        <div className="bg-stone-200 text-stone-950 font-bold p-2 w-full border-2 border-stone-300">
          <a href={homepageUrl?.value}>{String(homepageName?.value)}</a> |{" "}
          <Link to="/">Forum Team</Link> | Return to Top | Mark all forums read
          | RSS Syndication
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <span>Powered By reactForums, © 2025 reactForums.</span>
          <span>Current time: 2025-09-04, 12:53 PM</span>
        </div>
      </Edges>
    </>
  );
}
