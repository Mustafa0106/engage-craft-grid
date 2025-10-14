import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, MoreVertical, Mail, Shield, Users as UsersIcon } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@company.com",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    status: "active",
    joinedDate: "Jan 2023",
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah@company.com",
    role: "Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    status: "active",
    joinedDate: "Mar 2023",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@company.com",
    role: "Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    status: "active",
    joinedDate: "Jun 2023",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@company.com",
    role: "Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    status: "active",
    joinedDate: "Aug 2023",
  },
  {
    id: 5,
    name: "David Lee",
    email: "david@company.com",
    role: "Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    status: "invited",
    joinedDate: "Invited",
  },
];

const roleColors = {
  Admin: "destructive",
  Manager: "default",
  Analyst: "secondary",
} as const;

export default function Team() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Team</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your team members and their roles
            </p>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <UsersIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Members</p>
                  <p className="text-2xl font-bold text-foreground">5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Admins</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending Invites</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{member.email}</TableCell>
                    <TableCell>
                      <Badge variant={roleColors[member.role as keyof typeof roleColors]}>
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.status === "active" ? "default" : "outline"}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{member.joinedDate}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Role</DropdownMenuItem>
                          <DropdownMenuItem>Resend Invite</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Remove Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Roles & Permissions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">Admin</Badge>
                <p className="text-sm text-muted-foreground">
                  Full access to all features and settings
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">Manager</Badge>
                <p className="text-sm text-muted-foreground">
                  Can create campaigns and manage content
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Analyst</Badge>
                <p className="text-sm text-muted-foreground">View-only access to analytics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
