import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, TrendingUp, DollarSign, MousePointerClick } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const campaigns = [
  {
    id: 1,
    name: "Spring Sale 2024",
    platform: "Facebook",
    status: "active",
    spend: "$2,450",
    clicks: "12,543",
    conversions: 234,
    ctr: "3.8%",
    roi: "245%",
  },
  {
    id: 2,
    name: "Product Launch",
    platform: "Google Ads",
    status: "active",
    spend: "$5,120",
    clicks: "28,901",
    conversions: 456,
    ctr: "4.2%",
    roi: "312%",
  },
  {
    id: 3,
    name: "Brand Awareness",
    platform: "LinkedIn",
    status: "paused",
    spend: "$1,890",
    clicks: "8,234",
    conversions: 145,
    ctr: "2.9%",
    roi: "178%",
  },
  {
    id: 4,
    name: "Retargeting Q1",
    platform: "Meta",
    status: "active",
    spend: "$3,240",
    clicks: "15,678",
    conversions: 312,
    ctr: "3.5%",
    roi: "289%",
  },
  {
    id: 5,
    name: "Holiday Special",
    platform: "Twitter",
    status: "completed",
    spend: "$1,560",
    clicks: "6,789",
    conversions: 123,
    ctr: "3.1%",
    roi: "198%",
  },
];

const chartData = campaigns.slice(0, 4).map((c) => ({
  name: c.name.split(" ")[0],
  conversions: c.conversions,
  spend: parseInt(c.spend.replace(/[$,]/g, "")),
}));

export default function Campaigns() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Campaigns</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage and monitor your advertising campaigns
            </p>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Spend</p>
                  <p className="text-2xl font-bold text-foreground">$14,260</p>
                  <p className="text-sm text-success">+12% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <MousePointerClick className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Clicks</p>
                  <p className="text-2xl font-bold text-foreground">72,145</p>
                  <p className="text-sm text-success">+18.2% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg ROI</p>
                  <p className="text-2xl font-bold text-foreground">244%</p>
                  <p className="text-sm text-success">+8.5% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="conversions" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>All Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Spend</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Conversions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>ROI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell>{campaign.platform}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          campaign.status === "active"
                            ? "default"
                            : campaign.status === "paused"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{campaign.spend}</TableCell>
                    <TableCell>{campaign.clicks}</TableCell>
                    <TableCell>{campaign.conversions}</TableCell>
                    <TableCell>{campaign.ctr}</TableCell>
                    <TableCell className="text-success font-medium">{campaign.roi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
