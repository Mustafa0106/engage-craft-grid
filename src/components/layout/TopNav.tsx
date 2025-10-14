import { Search, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-2 sm:gap-4 border-b border-border bg-card px-4 sm:px-6">
      {/* Search */}
      <div className="flex-1 max-w-md hidden sm:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search posts, campaigns, analytics..."
            className="pl-10 bg-muted border-0"
          />
        </div>
      </div>

      {/* Mobile search icon */}
      <Button variant="ghost" size="icon" className="sm:hidden">
        <Search className="h-5 w-5" />
      </Button>

      <div className="flex-1 sm:hidden" />

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>

        <div className="ml-2 flex items-center gap-2 rounded-lg border border-border bg-muted px-2 sm:px-3 py-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            JD
          </div>
          <span className="text-sm font-medium hidden sm:inline">John Doe</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
