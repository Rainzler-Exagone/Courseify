import { Badge } from "@/components/ui/badge";
import { Card, CardContent,  CardHeader } from "@/components/ui/card"
import { notFound } from "next/navigation";
import  Courses from '@/data/courses.json'
import { BarChart2, Calendar, Clock, Globe, School, Star } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { Course } from "@/types/course";




 function getCourse(slug: string): Course | undefined   {
    return Courses.find((course: { id: string }) => course.id ===  slug) as Course | undefined;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

export default  async function CoursePage({ params }: { params:Promise<{ slug: string }>}) {
  const {slug}  = await params
    const course =  getCourse(slug);
 
      
    if (!course) return notFound();
  
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-3xl overflow-hidden bg-white">
            <div className="relative aspect-video">
              <Image
                src={course.pic}
                width={500}
                height={500}
                alt={course.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                  {course.category}
                </Badge>
                <Badge variant="destructive" className="bg-red-500">
                  {course.org_price}
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">{course.title}</h2>
                  <p className="text-muted-foreground mt-2">{course.short_desc}</p>
                </div>
                <a 
                  href={course.coupon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Get Course
                </a>
              </div>
            </CardHeader>
    
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{course.rating}.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">{course.duration} hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{course.language}</span>
                </div>
                <div className="flex items-center gap-2">
                  <School className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">{course.platform}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Expires {formatDate(course.expiry)}</span>
                </div>
              </div>
    
              <Separator className="my-4" />
    
              <div className="space-y-4">
                <h3 className="font-semibold">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.desc_text}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
}


