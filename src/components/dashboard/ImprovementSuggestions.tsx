import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  TrendingUp,
  Target,
  Zap,
  Video,
  Clock,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Suggestion {
  id: string;
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  category: "content" | "timing" | "boost" | "engagement";
  icon: React.ElementType;
}

const suggestions: Suggestion[] = [
  {
    id: "1",
    title: "Post more video content",
    description: "Your video posts get 3x more engagement than images. Try posting 2-3 videos per week.",
    impact: "high",
    category: "content",
    icon: Video,
  },
  {
    id: "2",
    title: "Optimal posting time: 6-9 PM",
    description: "Your audience is most active during evening hours. Schedule posts accordingly.",
    impact: "high",
    category: "timing",
    icon: Clock,
  },
  {
    id: "3",
    title: "Boost your top performer",
    description: "Your 'Flash Sale' post has high organic reach. Boosting it could reach 10K+ more people.",
    impact: "high",
    category: "boost",
    icon: Target,
  },
  {
    id: "4",
    title: "Increase reply rate",
    description: "Responding to comments within 1 hour boosts engagement by 40%. Current avg: 4 hours.",
    impact: "medium",
    category: "engagement",
    icon: Zap,
  },
];

const impactColors = {
  high: "bg-success/10 text-success border-success/20",
  medium: "bg-accent/10 text-accent border-accent/20",
  low: "bg-muted text-muted-foreground",
};

export function ImprovementSuggestions() {
  return (
    <Card className="border-0 shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-accent" />
          Improvement Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div
            key={suggestion.id}
            className="group relative rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-md hover:border-primary/30 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-secondary p-2.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <suggestion.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-sm">{suggestion.title}</h4>
                  <Badge
                    variant="outline"
                    className={cn("text-xs capitalize", impactColors[suggestion.impact])}
                  >
                    {suggestion.impact} impact
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {suggestion.description}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Apply <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        ))}

        <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
          <TrendingUp className="h-4 w-4 mr-2" />
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}
