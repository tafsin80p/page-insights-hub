import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "accent" | "info";
}

const variantStyles = {
  default: "bg-card",
  primary: "gradient-primary text-primary-foreground",
  success: "gradient-success text-success-foreground",
  accent: "gradient-accent text-accent-foreground",
  info: "bg-info text-info-foreground",
};

const iconBgStyles = {
  default: "bg-secondary text-secondary-foreground",
  primary: "bg-primary-foreground/20 text-primary-foreground",
  success: "bg-success-foreground/20 text-success-foreground",
  accent: "bg-accent-foreground/20 text-accent-foreground",
  info: "bg-info-foreground/20 text-info-foreground",
};

export function KPICard({
  title,
  value,
  change,
  changeLabel = "vs last week",
  icon: Icon,
  variant = "default",
}: KPICardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-0 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        variantStyles[variant]
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "opacity-80"
            )}>
              {title}
            </p>
            <p className="text-3xl font-bold tracking-tight animate-count-up">
              {value}
            </p>
            {change !== undefined && (
              <div className="flex items-center gap-1.5 text-sm">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
                    variant === "default"
                      ? isPositive
                        ? "bg-success/10 text-success"
                        : "bg-destructive/10 text-destructive"
                      : isPositive
                        ? "bg-primary-foreground/20"
                        : "bg-destructive/50"
                  )}
                >
                  {isPositive ? "+" : ""}
                  {change}%
                </span>
                <span className={cn(
                  "text-xs",
                  variant === "default" ? "text-muted-foreground" : "opacity-70"
                )}>
                  {changeLabel}
                </span>
              </div>
            )}
          </div>
          <div
            className={cn(
              "rounded-xl p-3",
              iconBgStyles[variant]
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
