import Image from 'next/image'
import Link from 'next/link'
import Button from '@/app/components/Button'
import  {fetchCourseById}  from '../../lib/api/coures'
import { type Course } from '@/app/types/course';

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  let dataCourse:  Course | null = null;
  const  {courseId}  = await params;
  const courses: Course | null = await fetchCourseById(courseId);
  const data_course: Course | null = courses ? courses : null;


  try {
    dataCourse = await fetchCourseById(courseId);
  } catch (error) {
    console.log('Failed to fetch course:', error);
  }

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

            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">{data_course?.NameCourse}</h1>
            <p className="text-lg text-white mb-6">{data_course?.DescriptionCourse}</p>
            <Link href={`/Courses/${data_course?.id}/Lesson/${data_course?.id}`}>
              <Button button="Get Started" w='' type='button' />
            </Link>
          </div>

          <div className="mb-8 bg-black p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Overview</h2>

            <p className="text-white">{data_course?.shortDescription ?? 'No overview available.'}</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">What you will learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">

              {data_course?.learningOutcomes?.map((o, i) => (
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
                src={data_course?.imageUrl || '/default.png'}
                alt={`Course: ${data_course?.NameCourse}`}
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
                  <span className="text-red-600 font-medium">{data_course?.duration} hours</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Level</span>
                  <span className="text-red-600 font-medium">{data_course?.level}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Category</span>
                  <span className="text-red-600 font-medium">{data_course?.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Lessons</span>
                  <span className="text-red-600 font-medium">{data_course?.totalLessons}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-white">Quizzes</span>
                  <span className="text-red-600 font-medium">{data_course?.totalQuizzes}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-white">Enrolled</span>
                  <span className="text-red-600 font-medium">{data_course?.enrollments}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
