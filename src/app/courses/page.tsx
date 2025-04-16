import fs from 'fs';
import path from 'path';
import  Courses from '@/data/courses.json'
import CoursesGrid from '@/components/CourseGrid'; // Update this import path as necessary
import { log } from 'console';

type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  category: string;
  duration: number;
};

type CoursesPageProps = {
  initialData: Course[];
};

export const getData = async () => {
 const initialData  = Courses
  console.log(initialData);
  
  return {
    props: {
      initialData,
    },
  };
};

export default function CoursesPage({ initialData }: any) {
    console.log(Courses);
    
  return <CoursesGrid initialData={Courses} />;
}
