import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  id: number;
}

export default function BlogPostCard({
  title,
  excerpt,
  date,
  category,
  image,
  id,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <p className="mb-4 text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <Badge variant="secondary">{category}</Badge>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          {date}
        </div>
      </CardFooter>
    </Card>
  );
}
