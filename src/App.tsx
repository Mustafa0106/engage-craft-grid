import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Scheduler from "./pages/Scheduler";
import Analytics from "./pages/Analytics";
import Inbox from "./pages/Inbox";
import Campaigns from "./pages/Campaigns";
import Accounts from "./pages/Accounts";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
