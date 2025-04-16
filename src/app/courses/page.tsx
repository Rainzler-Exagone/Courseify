import  Courses from '@/data/courses.json'
import CoursesGrid from '@/components/CourseGrid'; // Update this import path as necessary
import { Level } from '@/types/course';





export default function CoursesPage() {
    
  return <CoursesGrid initialData={Courses.map(course => ({ 
    ...course, 
    level: course.level as Level
  }))} />;
}
