import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, MessageCircle, Share2, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Post {
  id: string;
  title: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  engagement: number;
  trend: "up" | "down" | "stable";
  type: "image" | "video" | "text" | "carousel";
}

const mockPosts: Post[] = [
  {
    id: "1",
    title: "New Product Launch 🚀",
    date: "Jan 30, 2026",
    views: 12500,
    likes: 890,
    comments: 156,
    shares: 89,
    engagement: 8.5,
    trend: "up",
    type: "video",
  },
  {
    id: "2",
    title: "Customer Review Spotlight",
    date: "Jan 28, 2026",
    views: 8200,
    likes: 456,
    comments: 78,
    shares: 34,
    engagement: 6.2,
    trend: "up",
    type: "image",
  },
  {
    id: "3",
    title: "Flash Sale Announcement",
    date: "Jan 25, 2026",
    views: 15800,
    likes: 1200,
    comments: 234,
    shares: 167,
    engagement: 9.8,
    trend: "up",
    type: "carousel",
  },
  {
    id: "4",
    title: "Behind the Scenes",
    date: "Jan 22, 2026",
    views: 5600,
    likes: 312,
    comments: 45,
    shares: 23,
    engagement: 4.2,
    trend: "down",
    type: "video",
  },
  {
    id: "5",
    title: "Product Tips & Tricks",
    date: "Jan 20, 2026",
    views: 7800,
    likes: 567,
    comments: 89,
    shares: 56,
    engagement: 7.1,
    trend: "stable",
    type: "text",
  },
];

const typeColors = {
  image: "bg-info/10 text-info border-info/20",
  video: "bg-destructive/10 text-destructive border-destructive/20",
  text: "bg-muted text-muted-foreground",
  carousel: "bg-accent/10 text-accent border-accent/20",
};

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export function PostsTable() {
  return (
    <Card className="border-0 shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Post Performance</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="pl-6">Post</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> Views
                </span>
              </TableHead>
              <TableHead className="text-right">
                <span className="inline-flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> Likes
                </span>
              </TableHead>
              <TableHead className="text-right">
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" /> Comments
                </span>
              </TableHead>
              <TableHead className="text-right">
                <span className="inline-flex items-center gap-1">
                  <Share2 className="h-3.5 w-3.5" /> Shares
                </span>
              </TableHead>
              <TableHead className="text-right pr-6">Engagement</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPosts.map((post, index) => (
              <TableRow
                key={post.id}
                className="border-border transition-colors hover:bg-muted/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TableCell className="pl-6">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn("capitalize text-xs", typeColors[post.type])}>
                    {post.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatNumber(post.views)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatNumber(post.likes)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatNumber(post.comments)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatNumber(post.shares)}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-2">
                    <span className="font-semibold">{post.engagement}%</span>
                    {post.trend === "up" && (
                      <TrendingUp className="h-4 w-4 text-success" />
                    )}
                    {post.trend === "down" && (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
