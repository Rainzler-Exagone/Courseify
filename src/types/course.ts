export type Course = {
  id: string;
  sku: string;
  pic: string;
  title: string;
  coupon: string;
  org_price: string;
  desc_text: string;
  short_desc: string;
  category: string;
  language: string;
  platform: string;
  rating: number;
  duration: number;
  expiry: string;
  savedtime: string;
  level: Level;
};

export type CourseList = {
  courses: Course[];
}

export type Level = "Beginner" | "Intermediate" | "Advanced";
export type  CourseCategory  = "Business" | "Tech" | "Law"