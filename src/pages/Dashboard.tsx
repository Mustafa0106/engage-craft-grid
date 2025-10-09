import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  MousePointer, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Download,
  Calendar
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const kpiData = [
  {
    title: "Total Impressions",
    value: "1.2M",
    change: "+12.5% from last month",
    changeType: "positive" as const,
    icon: Eye,
    iconColor: "bg-blue-100 text-blue-600"
  },
  {
    title: "Click Rate",
    value: "3.42%",
    change: "+0.8% from last month",
    changeType: "positive" as const,
    icon: MousePointer,
    iconColor: "bg-purple-100 text-purple-600"
  },
  {
    title: "Engagement",
    value: "45.2K",
    change: "+18.2% from last month",
    changeType: "positive" as const,
    icon: TrendingUp,
    iconColor: "bg-green-100 text-green-600"
  },
  {
    title: "Followers",
    value: "125K",
    change: "+5.4% from last month",
    changeType: "positive" as const,
    icon: Users,
    iconColor: "bg-orange-100 text-orange-600"
  },
  {
    title: "Ad Spend",
    value: "$12,450",
    change: "-8.2% from last month",
    changeType: "positive" as const,
    icon: DollarSign,
    iconColor: "bg-red-100 text-red-600"
  },
  {
    title: "ROI",
    value: "4.8x",
    change: "+1.2x from last month",
    changeType: "positive" as const,
    icon: Target,
    iconColor: "bg-indigo-100 text-indigo-600"
  }
];

const performanceData = [
  { date: "Jan 1", impressions: 45000, engagement: 3200, clicks: 1800 },
  { date: "Jan 8", impressions: 52000, engagement: 3800, clicks: 2100 },
  { date: "Jan 15", impressions: 48000, engagement: 3500, clicks: 1950 },
  { date: "Jan 22", impressions: 61000, engagement: 4200, clicks: 2400 },
  { date: "Jan 29", impressions: 58000, engagement: 4000, clicks: 2300 },
  { date: "Feb 5", impressions: 67000, engagement: 4800, clicks: 2800 },
  { date: "Feb 12", impressions: 72000, engagement: 5200, clicks: 3100 }
];

const platformData = [
  { platform: "Facebook", engagement: 12500, impressions: 320000 },
  { platform: "Instagram", engagement: 18200, impressions: 450000 },
  { platform: "Twitter", engagement: 8400, impressions: 180000 },
  { platform: "LinkedIn", engagement: 6100, impressions: 95000 }
];

const topPosts = [
  { 
    id: 1, 
    content: "Summer Sale: Up to 50% off on all products! 🌞", 
    platform: "Instagram", 
    engagement: 8420,
    impressions: 125000,
    date: "Feb 10, 2025"
  },
  { 
    id: 2, 
    content: "Introducing our new product line...", 
    platform: "Facebook", 
    engagement: 6230,
    impressions: 98000,
    date: "Feb 8, 2025"
  },
  { 
    id: 3, 
    content: "Behind the scenes: How we create magic ✨", 
    platform: "Twitter", 
    engagement: 4810,
    impressions: 76000,
    date: "Feb 6, 2025"
  }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome back! Here's what's happening with your social media.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {kpiData.map((kpi) => (
            <KPICard key={kpi.title} {...kpi} />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Performance Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="impressions" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="clicks" 
                    stroke="hsl(var(--warning))" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Platform Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="platform" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }}
                  />
                  <Legend />
                  <Bar dataKey="engagement" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post) => (
                <div 
                  key={post.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{post.content}</p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.platform}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{post.engagement.toLocaleString()}</p>
                      <p className="text-muted-foreground">Engagement</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{post.impressions.toLocaleString()}</p>
                      <p className="text-muted-foreground">Impressions</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
