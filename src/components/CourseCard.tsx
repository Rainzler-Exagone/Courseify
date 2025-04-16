import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image";

const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
        case 'easy':
            return 'bg-green-200 text-green-800';
        case 'medium':
            return 'bg-yellow-200 text-yellow-800';
        case 'hard':
            return 'bg-red-200 text-red-800';
        default:
            return 'bg-gray-200 text-gray-800';
    }
};

export default function CourseCard({ course }) {
    return (
        <Card className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Course Image - takes most of the card space */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    alt={course.title || "Course image"}
                    src={course.pic}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            {/* Card Content */}
            <CardHeader className="p-4">
                <CardTitle className="text-lg font-bold line-clamp-1">{course.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                    {course.description}
                </CardDescription>
            </CardHeader>
            
            <CardContent className="p-4">
                <div className="flex justify-between items-center">
                    <Badge className={`${getLevelColor(course.difficulty)}`}>
                        {course.difficulty}
                    </Badge>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-800 text-white">
                       duration: {course.duration}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}