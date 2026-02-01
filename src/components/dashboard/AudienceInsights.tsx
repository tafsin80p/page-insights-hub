import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, MapPin, Clock, Smartphone } from "lucide-react";

const demographics = [
  { label: "18-24", percentage: 22, color: "bg-chart-1" },
  { label: "25-34", percentage: 38, color: "bg-chart-2" },
  { label: "35-44", percentage: 25, color: "bg-chart-3" },
  { label: "45-54", percentage: 10, color: "bg-chart-4" },
  { label: "55+", percentage: 5, color: "bg-chart-5" },
];

const topLocations = [
  { city: "Manila", percentage: 35 },
  { city: "Cebu City", percentage: 18 },
  { city: "Davao", percentage: 12 },
  { city: "Quezon City", percentage: 10 },
  { city: "Makati", percentage: 8 },
];

const peakHours = [
  { time: "6-9 AM", activity: 45 },
  { time: "12-2 PM", activity: 78 },
  { time: "6-9 PM", activity: 95 },
  { time: "9-11 PM", activity: 68 },
];

export function AudienceInsights() {
  return (
    <Card className="border-0 shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Audience Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Age Demographics */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Age Distribution</h4>
          <div className="space-y-2">
            {demographics.map((demo) => (
              <div key={demo.label} className="flex items-center gap-3">
                <span className="text-sm w-12">{demo.label}</span>
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${demo.color} rounded-full transition-all duration-500`}
                    style={{ width: `${demo.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-10 text-right">{demo.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Locations */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Top Locations
          </h4>
          <div className="space-y-2">
            {topLocations.map((loc, index) => (
              <div key={loc.city} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-4">{index + 1}.</span>
                  <span className="text-sm">{loc.city}</span>
                </div>
                <span className="text-sm font-medium">{loc.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Peak Activity Hours
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {peakHours.map((hour) => (
              <div
                key={hour.time}
                className="bg-secondary/50 rounded-lg p-3 text-center"
              >
                <p className="text-xs text-muted-foreground">{hour.time}</p>
                <p className="text-lg font-semibold text-primary">{hour.activity}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Device Split */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            Device Usage
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span>Mobile</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span>Desktop</span>
                <span className="font-medium">22%</span>
              </div>
              <Progress value={22} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
