import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

const messages = [
  {
    id: 1,
    platform: "facebook",
    type: "comment",
    user: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    message: "This is exactly what I was looking for! When will you restock?",
    timestamp: "2 hours ago",
    post: "New Product Launch",
    unread: true,
  },
  {
    id: 2,
    platform: "twitter",
    type: "mention",
    user: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    message: "@yourbrand Your customer service is outstanding! Thanks for the quick response.",
    timestamp: "4 hours ago",
    unread: true,
  },
  {
    id: 3,
    platform: "instagram",
    type: "message",
    user: "Emma Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    message: "Hi! I'd like to know more about your pricing plans.",
    timestamp: "5 hours ago",
    unread: false,
  },
  {
    id: 4,
    platform: "linkedin",
    type: "comment",
    user: "David Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    message: "Great insights! Would love to collaborate on this.",
    timestamp: "1 day ago",
    unread: false,
  },
];

const platformIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function Inbox() {
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);
  const [replyText, setReplyText] = useState("");

  const getPlatformColor = (platform: string) => {
    const colors = {
      facebook: "text-blue-600",
      twitter: "text-sky-500",
      linkedin: "text-blue-700",
      instagram: "text-pink-600",
    };
    return colors[platform as keyof typeof colors];
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inbox</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage all your social media conversations in one place
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="mentions">Mentions</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-1">
                <CardContent className="p-0">
                  <div className="divide-y">
                    {messages.map((msg) => {
                      const PlatformIcon = platformIcons[msg.platform as keyof typeof platformIcons];
                      return (
                        <div
                          key={msg.id}
                          onClick={() => setSelectedMessage(msg)}
                          className={`cursor-pointer p-4 transition-colors hover:bg-muted/50 ${
                            selectedMessage?.id === msg.id ? "bg-muted" : ""
                          }`}
                        >
                          <div className="flex gap-3">
                            <Avatar>
                              <AvatarImage src={msg.avatar} />
                              <AvatarFallback>{msg.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium">{msg.user}</p>
                                {msg.unread && (
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                )}
                              </div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">
                                {msg.message}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <PlatformIcon className={`h-3 w-3 ${getPlatformColor(msg.platform)}`} />
                                <span>{msg.timestamp}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {msg.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  {selectedMessage && (
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={selectedMessage.avatar} />
                          <AvatarFallback>{selectedMessage.user[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{selectedMessage.user}</p>
                            {(() => {
                              const PlatformIcon = platformIcons[selectedMessage.platform as keyof typeof platformIcons];
                              return <PlatformIcon className={`h-4 w-4 ${getPlatformColor(selectedMessage.platform)}`} />;
                            })()}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {selectedMessage.timestamp} • {selectedMessage.type}
                          </p>
                          {selectedMessage.post && (
                            <p className="mt-1 text-sm text-muted-foreground">
                              On post: <span className="font-medium">{selectedMessage.post}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="rounded-lg bg-muted/50 p-4">
                        <p className="text-foreground">{selectedMessage.message}</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Reply</label>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Type your reply..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                          />
                          <Button>
                            <Send className="mr-2 h-4 w-4" />
                            Send
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comments">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Comments view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentions">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Mentions view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Direct messages view coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
