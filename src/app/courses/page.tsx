import  Courses from '@/data/courses.json'
import CoursesGrid from '@/components/CourseGrid'; // Update this import path as necessary





export default function CoursesPage() {
    
  return <CoursesGrid initialData={Courses} />;
}
