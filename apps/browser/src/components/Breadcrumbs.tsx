import { settingsService } from "@/api/client";
import { SettingKey } from "@reactforums/core";
import { Link } from "@tanstack/react-router";

export interface Crumb {
  label: string;
  href?: string;
}
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const boardName = settingsService.getByName(SettingKey.BoardName);
  const boardUrl = settingsService.getByName(SettingKey.BoardUrl);
  const crumbStart = {
    label: String(boardName?.value),
    href: boardUrl?.value,
  };
  const crumbsWithRoot = [crumbStart, ...crumbs];

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="text-sm font-bold flex flex-row items-center justify-start py-4">
          {crumbsWithRoot.map((crumb, i) => (
            <li key={i} className="flex items-center">
              {crumb.href ? (
                <Link to={crumb.href} className="hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
              {i < crumbs.length && <span className="mx-2">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
