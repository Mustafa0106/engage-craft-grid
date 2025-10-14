import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, TrendingUp, Users, GripVertical } from "lucide-react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const engagementData = [
  { date: "Week 1", engagement: 3200, reach: 45000 },
  { date: "Week 2", engagement: 3800, reach: 52000 },
  { date: "Week 3", engagement: 3500, reach: 48000 },
  { date: "Week 4", engagement: 4200, reach: 61000 },
];

const followerGrowth = [
  { date: "Jan", followers: 98000 },
  { date: "Feb", followers: 105000 },
  { date: "Mar", followers: 112000 },
  { date: "Apr", followers: 125000 },
];

interface Widget {
  id: string;
  type: string;
  title: string;
  component: React.ReactNode;
}

function SortableWidget({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div
        {...attributes}
        {...listeners}
        className="absolute right-2 top-2 z-10 cursor-grab rounded-lg bg-background/80 p-2 opacity-0 transition-opacity hover:opacity-100 active:cursor-grabbing"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground" />
      </div>
      {children}
    </div>
  );
}

export default function AnalyticsDragDrop() {
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: "kpi-1",
      type: "kpi",
      title: "Total Reach",
      component: (
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Reach</p>
                <p className="text-2xl font-bold text-foreground">1.2M</p>
                <p className="text-sm text-success">+12.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "kpi-2",
      type: "kpi",
      title: "Engagement Rate",
      component: (
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
                <p className="text-2xl font-bold text-foreground">4.8%</p>
                <p className="text-sm text-success">+0.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "kpi-3",
      type: "kpi",
      title: "New Followers",
      component: (
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">New Followers</p>
                <p className="text-2xl font-bold text-foreground">+6.2K</p>
                <p className="text-sm text-success">+18.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "chart-1",
      type: "chart",
      title: "Engagement vs Reach",
      component: (
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Engagement vs Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorEngagement)"
                />
                <Area
                  type="monotone"
                  dataKey="reach"
                  stroke="hsl(var(--success))"
                  fillOpacity={1}
                  fill="url(#colorReach)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "chart-2",
      type: "chart",
      title: "Follower Growth",
      component: (
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={followerGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      ),
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setWidgets((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Analytics</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Drag and drop widgets to customize your dashboard
            </p>
          </div>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={widgets.map((w) => w.id)} strategy={rectSortingStrategy}>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {widgets.map((widget) => (
                <SortableWidget key={widget.id} id={widget.id}>
                  {widget.component}
                </SortableWidget>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </DashboardLayout>
  );
}
