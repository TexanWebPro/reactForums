import { settingQueries } from "@/features/settings/settings.query";
import { SettingKey } from "@reactforums/core";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Skeleton } from "./ui/skeleton";

export interface Crumb {
  label: string;
  href?: string;
}
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const { data, isLoading, error } = useQuery({
    ...settingQueries.byNames([SettingKey.BoardName, SettingKey.BoardUrl]),
  });

  if (isLoading)
    return (
      <>
        <LoadingBreadcrumbs />
      </>
    );
  if (error) return <>error</>;
  if (!data) return <>no data</>;

  const [boardName, boardUrl] = data;
  const crumbStart = {
    label: String(boardName.value),
    href: boardUrl.value,
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

function LoadingBreadcrumbs() {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="text-sm font-bold flex flex-row items-center justify-start py-4">
          <Skeleton className="h-4" />
        </ol>
      </nav>
    </>
  );
}
