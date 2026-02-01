import { Header } from "@/components/dashboard/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { PostsTable } from "@/components/dashboard/PostsTable";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { AudienceInsights } from "@/components/dashboard/AudienceInsights";
import { ImprovementSuggestions } from "@/components/dashboard/ImprovementSuggestions";
import { BoostPanel } from "@/components/dashboard/BoostPanel";
import {
  Eye,
  Heart,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6 space-y-6">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tight">Welcome back! 👋</h2>
          <p className="text-muted-foreground">
            Here's how your page is performing this week.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="animate-slide-up" style={{ animationDelay: "0ms" }}>
            <KPICard
              title="Total Views"
              value="49,823"
              change={12.5}
              icon={Eye}
              variant="primary"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "50ms" }}>
            <KPICard
              title="Engagement"
              value="3,425"
              change={8.2}
              icon={Heart}
              variant="default"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <KPICard
              title="Orders"
              value="234"
              change={24.1}
              icon={ShoppingCart}
              variant="success"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
            <KPICard
              title="Revenue"
              value="$37,100"
              change={18.7}
              icon={DollarSign}
              variant="accent"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Charts & Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <SalesChart />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "250ms" }}>
              <PostsTable />
            </div>
          </div>

          {/* Right Column - Insights & Boost */}
          <div className="space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
              <BoostPanel />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "350ms" }}>
              <AudienceInsights />
            </div>
          </div>
        </div>

        {/* Improvement Suggestions - Full Width */}
        <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
          <ImprovementSuggestions />
        </div>

        {/* Quick Stats Footer */}
        <div className="grid gap-4 md:grid-cols-3 animate-slide-up" style={{ animationDelay: "450ms" }}>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold">+156%</p>
              <p className="text-sm text-muted-foreground">Growth this month</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full gradient-success flex items-center justify-center">
              <Users className="h-6 w-6 text-success-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold">12.4K</p>
              <p className="text-sm text-muted-foreground">Page followers</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full gradient-accent flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold">89%</p>
              <p className="text-sm text-muted-foreground">Repeat customers</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
