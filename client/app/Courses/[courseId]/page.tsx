import Image from 'next/image'
import Link from 'next/link'
import Button from '@/app/components/Button'
<<<<<<< HEAD
import { fetchCourseById } from '@/app/lib/api/coures'
import type { CourseData } from '@/app/types/course'
=======
import  {fetchCourseById}  from '../../lib/api/coures'
import { type Course } from '@/app/types/course';
// import { Types } from 'mongoose';
>>>>>>> MNchanges

// export interface Course {
//   id:               Types.ObjectId
//   NameCourse:       string
//   DescriptionCourse:string
//   shortDescription: string
//   category:         string
//   level:            string
//   duration:         number
//   XpNumber:         number
//   AchievementsIcon: string
//   Icon:             string
//   modules:          string[]
//   prerequisites:    string[]
//   learningOutcomes: string[]
//   rating:           number
//   totalLessons:     number
//   totalQuizzes:      number
//   enrollments:      number
//   imageUrl?:        string
//   o:number
//   i:number
// }
/**
 * 
 * i'm comment that's because the  await fetchCourseById(courseId); is async and return a promise has array of course
 * with type Course Comes from @/app/types/course
 * and This Interface above is the type of the course but different to the outcome of the function
 * so i need to put the dataCourse variable as the same type as the outcome of the function
 */


export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
<<<<<<< HEAD
  const  {courseId}  = await params
<<<<<<< HEAD
  const courses: CourseData[] = await fetchCourseById(courseId).catch(() => [])
  const datacourse: CourseData | null = courses[0] ?? null
=======
  let dataCourse:  Course[] | null = null;
  // console.log('Course Page - courseId:', await params); 
=======
  const  {courseId}  = await params;
  const courses: CourseData | null = await fetchCourseById(courseId);
  const datacourse: CourseData | null = courses ? courses : null;

  // console.log('Fetched course data from :', courses, datacourse);
>>>>>>> pyment

  try {
    dataCourse = await fetchCourseById(courseId);
  } catch (error) {
    console.log('Failed to fetch course:', error);
  }
>>>>>>> MNchanges

  const firstOne = Array.isArray(dataCourse) ? dataCourse[0] : dataCourse;

  if (!dataCourse) {
    return (
      <div className="p-8 text-center min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex items-center justify-center">
        <p className="text-white text-2xl font-bold">Course not found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-8">
<<<<<<< HEAD
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">{firstOne?.NameCourse}</h1>
            <p className="text-lg text-white mb-6">{firstOne?.DescriptionCourse}</p>
            <Link href={`/Courses/${courseId}/Lesson/${courseId}`}>
              <Button button="Get Started" type={"button"} w=''/>
=======
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">{datacourse?.Namecourse}</h1>
            <p className="text-lg text-white mb-6">{datacourse?.DescriptionCourse}</p>
            <Link href={`/Courses/${datacourse?.id}/Lesson/${datacourse?.id}`}>
              <Button button="Get Started"  />
>>>>>>> pyment
            </Link>
          </div>

          <div className="mb-8 bg-black p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Overview</h2>
<<<<<<< HEAD
            <p className="text-white">{firstOne?.shortDescription ?? 'No overview available.'}</p>
=======
            <p className="text-white">{datacourse?.shortDescription ?? 'No overview available.'}</p>
>>>>>>> pyment
          </div>

          <div className="bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">What you will learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
<<<<<<< HEAD
              {firstOne?.learningOutcomes?.map((o, i) => (
=======
              {datacourse?.learningOutcomes.map((o, i) => (
>>>>>>> pyment
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:w-80 lg:w-96 flex-shrink-0">
          <aside className="bg-black rounded-xl shadow-md overflow-hidden sticky top-6 border border-gray-200">
            <div className="relative h-48 w-full border-b border-gray-200">
              <Image
<<<<<<< HEAD
                src={firstOne?.imageUrl ?? '/default.png'}
                alt={`Cover Image for ${firstOne?.NameCourse ?? 'Course'}`}
=======
                src={datacourse?.imageUrl || '/default.png'}
                alt={`Course: ${datacourse?.Namecourse}`}
>>>>>>> pyment
                fill
                priority={true}
                sizes='100%'
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600 border-b border-gray-200 pb-2">Course Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Duration</span>
<<<<<<< HEAD
                  <span className="text-red-600 font-medium">{firstOne?.duration} hours</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Level</span>
                  <span className="text-red-600 font-medium">{firstOne?.level}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Category</span>
                  <span className="text-red-600 font-medium">{firstOne?.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Lessons</span>
                  <span className="text-red-600 font-medium">{firstOne?.totalLessons}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Quizzes</span>
                  <span className="text-red-600 font-medium">{firstOne?.totalQuizzes}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-white">Enrolled</span>
                  <span className="text-red-600 font-medium">{firstOne?.enrollments}</span>
=======
                  <span className="text-red-600 font-medium">{datacourse?.duration} hours</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Level</span>
                  <span className="text-red-600 font-medium">{datacourse?.level}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Category</span>
                  <span className="text-red-600 font-medium">{datacourse?.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Lessons</span>
                  <span className="text-red-600 font-medium">{datacourse?.totalLessons}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Quizzes</span>
                  <span className="text-red-600 font-medium">{datacourse?.totalQuizzes}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-white">Enrolled</span>
                  <span className="text-red-600 font-medium">{datacourse?.enrollments}</span>
>>>>>>> pyment
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
