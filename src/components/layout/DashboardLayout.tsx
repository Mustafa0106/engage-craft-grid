import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-0 lg:ml-64">
        <TopNav />
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
