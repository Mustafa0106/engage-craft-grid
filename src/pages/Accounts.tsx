import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, CheckCircle2, XCircle } from "lucide-react";

const connectedAccounts = [
  {
    id: 1,
    platform: "Facebook",
    icon: Facebook,
    accountName: "Your Business Page",
    username: "@yourbusiness",
    followers: "125K",
    connected: true,
    lastSync: "2 hours ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=FB",
    color: "text-blue-600",
  },
  {
    id: 2,
    platform: "Twitter",
    icon: Twitter,
    accountName: "Company Twitter",
    username: "@yourcompany",
    followers: "45.2K",
    connected: true,
    lastSync: "1 hour ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TW",
    color: "text-sky-500",
  },
  {
    id: 3,
    platform: "LinkedIn",
    icon: Linkedin,
    accountName: "Company Page",
    username: "your-company",
    followers: "89K",
    connected: true,
    lastSync: "30 minutes ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=LI",
    color: "text-blue-700",
  },
  {
    id: 4,
    platform: "Instagram",
    icon: Instagram,
    accountName: "Brand Instagram",
    username: "@yourbrand",
    followers: "312K",
    connected: true,
    lastSync: "3 hours ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=IG",
    color: "text-pink-600",
  },
  {
    id: 5,
    platform: "YouTube",
    icon: Youtube,
    accountName: "Brand Channel",
    username: "@brandchannel",
    followers: "56K",
    connected: false,
    lastSync: "-",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=YT",
    color: "text-red-600",
  },
];

export default function Accounts() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Accounts</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Connect and manage your social media accounts
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {connectedAccounts.map((account) => {
            const Icon = account.icon;
            return (
              <Card key={account.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg bg-muted p-2 ${account.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{account.platform}</CardTitle>
                        <CardDescription className="text-xs">{account.username}</CardDescription>
                      </div>
                    </div>
                    {account.connected ? (
                      <Badge variant="default" className="gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Connected
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="gap-1">
                        <XCircle className="h-3 w-3" />
                        Not Connected
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={account.avatar} />
                      <AvatarFallback>{account.platform[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{account.accountName}</p>
                      <p className="text-xs text-muted-foreground">
                        {account.followers} followers
                      </p>
                    </div>
                  </div>

                  {account.connected && (
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-muted-foreground">
                        Last synced: <span className="font-medium text-foreground">{account.lastSync}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {account.connected ? (
                      <>
                        <Button variant="outline" size="sm" className="flex-1">
                          Refresh
                        </Button>
                        <Button variant="destructive" size="sm" className="flex-1">
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" className="w-full">
                        Connect Account
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Learn how to connect your social media accounts and troubleshoot common issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">View Documentation</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
