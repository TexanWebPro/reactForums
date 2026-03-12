import Edges from "../Edges";
import AdminHeader from "./Header";
import { AdminSidebarNav } from "./Sidebar";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-300 min-h-screen">
      <AdminHeader />
      <div className="flex flex-row gap-4">
        <AdminSidebarNav />
        <div className="px-4 py-10 w-full">{children}</div>
      </div>
    </div>
  );
}
