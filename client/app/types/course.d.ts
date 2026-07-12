export interface CourseData {
  id: string;
  NameCourse: string;
  DescriptionCourse: string;
  shortDescription: string;
  category: string;
  level: string;
  duration: number;
  XpNumber: number;
  AchievementsIcon: string;
  Icon: string;
  modules: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  rating: number;
  totalLessons: number;
  totalQuizzes: number;
  enrollments: number;
  imageUrl?: string;
  o: number;
  i: number;
}

export interface Course {
  id?: string;
  _id: number;
  NameCourse: string;
  DescriptionCourse: string;
  shortDescription?: string;
  category: string;
  level: string;
  duration: number;
  XpNumber?: number;
  rating: number;
  imageUrl: string;
  prerequisites?: string[];
  learningOutcomes?: string[];
  totalLessons?: number;
  totalQuizzes?: number;
  enrollments?: number;
  createdAt?: string;
  updatedAt?: string;
  filters: string;
  modules: string[];
  price: "Free" | "Paid";
  isPublished: boolean;
  videoUrl?: string[];
  text?: string[];
  quiz?: string[];
  filters:string,
  modules: Types.ObjectId[]; // References to module documents
  prerequisites: string[];
  learningOutcomes: string[];
  rating: number; // rating of the course
  price: "Free" | "Paid"; // type of the course
  createdAt: Date; // Timestamp of creation
  updatedAt: Date; // Timestamps for when the course was created and last updated
  isPublished: boolean; // is the course published?
  totalLessons: number; // Total number of lessons in the course
  totalQuizzes: number; // Total number of quizzes in the course
  enrollments: number; // number of enrollments
  XpNumber: number; // XP number for the course
  videoUrl?: Types.ObjectId[]; // video URL of the lesson
  text?: Types.ObjectId[];
  quiz?: Types.ObjectId[];
  InstructorInformation: string;
  Instructor: string;
  o: number;
  i: number;
}
  