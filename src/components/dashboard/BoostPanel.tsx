import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Rocket,
  DollarSign,
  Users,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export function BoostPanel() {
  const [budget, setBudget] = useState([50]);

  const estimatedReach = Math.floor(budget[0] * 180);
  const estimatedClicks = Math.floor(budget[0] * 8);

  return (
    <Card className="border-0 shadow-card overflow-hidden">
      <CardHeader className="pb-4 gradient-primary text-primary-foreground">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Rocket className="h-5 w-5" />
          Boost Your Sales
        </CardTitle>
        <p className="text-sm opacity-90 mt-1">
          Reach more customers with targeted advertising
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Budget Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Daily Budget</label>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold text-primary">{budget[0]}</span>
            </div>
          </div>
          <Slider
            value={budget}
            onValueChange={setBudget}
            min={10}
            max={200}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$10/day</span>
            <span>$200/day</span>
          </div>
        </div>

        {/* Estimated Results */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <Eye className="h-5 w-5 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold">{estimatedReach.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Est. Reach</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <Users className="h-5 w-5 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">{estimatedClicks}</p>
            <p className="text-xs text-muted-foreground">Est. Clicks</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-sm font-medium">What's included:</p>
          <ul className="space-y-2">
            {[
              "Target by location, age & interests",
              "Automatic optimization for sales",
              "Real-time performance tracking",
              "Easy pause or adjust anytime",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Start Boosting
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          No commitment. Cancel anytime.
        </p>
      </CardContent>
    </Card>
  );
}
