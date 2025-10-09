import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Calendar as CalendarIcon, Clock } from "lucide-react";

const scheduledPosts = [
  {
    id: 1,
    content: "Exciting product launch coming soon! Stay tuned 🚀",
    platforms: ["Facebook", "Twitter", "LinkedIn"],
    scheduledTime: "Feb 15, 2025 at 10:00 AM",
    status: "scheduled"
  },
  {
    id: 2,
    content: "Tips for growing your social media presence...",
    platforms: ["Instagram", "Facebook"],
    scheduledTime: "Feb 16, 2025 at 2:30 PM",
    status: "scheduled"
  },
  {
    id: 3,
    content: "Behind the scenes: Our team at work 💼",
    platforms: ["LinkedIn", "Twitter"],
    scheduledTime: "Feb 17, 2025 at 9:00 AM",
    status: "scheduled"
  }
];

export default function Scheduler() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Scheduler</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Plan and schedule your social media posts
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Week View
                </Button>
                <Button variant="outline" size="sm">Month View</Button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Scheduled Posts</h3>
                {scheduledPosts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                  >
                    <p className="font-medium text-foreground">{post.content}</p>
                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.scheduledTime}</span>
                      </div>
                      <div className="flex gap-2">
                        {post.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold text-foreground">Quick Stats</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Posts This Week</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Posts Today</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-2xl font-bold text-foreground">28</p>
                  <p className="text-sm text-muted-foreground">Drafts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
