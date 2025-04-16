export type Course  = {
  id: number;
  title:string
    description:string;
    image:string;
    duration:string;
    level: Level;
}

export type Level = "Beginner" | "Intermediate" | "Advanced";