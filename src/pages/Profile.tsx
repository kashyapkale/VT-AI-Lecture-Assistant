import React from 'react';

type StudentData = {
  name: string;
  studentId: string;
  major: string;
  year: string;
  email: string;
  phone: string;
  gpa: string;
  totalCredits: number;
  currentSemesterCredits: number;
  completedAssignments: number;
  dueSoon: number;
};

type Course = {
  code: string;
  title: string;
  credits: number;
};

const Profile = () => {
  const studentData: StudentData = {
    name: "Sarah Johnson",
    studentId: "VT2024001",
    major: "Computer Science",
    year: "Junior",
    email: "sarah.johnson@vt.edu",
    phone: "(540) 555-0123",
    gpa: "3.87",
    totalCredits: 98,
    currentSemesterCredits: 12,
    completedAssignments: 47,
    dueSoon: 5
  };

  const currentCourses: Course[] = [
    {
      code: "CS 3114",
      title: "Data Structures & Algorithms",
      credits: 3
    },
    {
      code: "CS 3704", 
      title: "Intermediate Software Design",
      credits: 3
    },
    {
      code: "CS 4104",
      title: "Computer Architecture", 
      credits: 3
    },
    {
      code: "MATH 2214",
      title: "Introduction to Differential Equations",
      credits: 3
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-vt-maroon to-vt-orange text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold">Student Profile</h1>
        <p className="mt-2 opacity-90">Your academic information and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">SJ</span>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{studentData.name}</h2>
              <p className="text-lg text-gray-600 mb-1">Student ID: {studentData.studentId}</p>
              <p className="text-lg text-vt-maroon font-semibold mb-4">{studentData.major} • {studentData.year}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-sm">{studentData.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-sm">{studentData.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                GPA: {studentData.gpa}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-vt-maroon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span className="font-semibold text-gray-900">Total Credits</span>
              </div>
              <span className="text-2xl font-bold text-vt-maroon">{studentData.totalCredits}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="font-semibold text-gray-900">This Semester</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">{studentData.currentSemesterCredits}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
                <span className="font-semibold text-gray-900">Completed</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{studentData.completedAssignments}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="font-semibold text-gray-900">Due Soon</span>
              </div>
              <span className="text-2xl font-bold text-orange-600">{studentData.dueSoon}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Current Courses</h3>
          <p className="text-gray-600 mt-1">Spring 2024 Semester</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCourses.map((course, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-vt-maroon transition-colors duration-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{course.code}</h4>
                    <p className="text-gray-600 mt-1">{course.title}</p>
                  </div>
                  <span className="text-sm font-medium text-vt-maroon bg-red-50 px-2 py-1 rounded">
                    {course.credits} Credits
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
