import React from 'react';
import { Link } from 'react-router-dom';

type LectureItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  completed: boolean;
};

const Lectures = () => {
  const lecturesData: LectureItem[] = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      description: "Overview of basic data structures including arrays, linked lists, and their applications.",
      date: "Sunday, January 14, 2024",
      duration: "75 minutes",
      completed: true
    },
    {
      id: 2,
      title: "Stack and Queue Implementation",
      description: "Deep dive into stack and queue data structures with practical implementations and use cases.",
      date: "Sunday, January 21, 2024",
      duration: "90 minutes",
      completed: true
    },
    {
      id: 3,
      title: "Binary Trees and Tree Traversals",
      description: "Understanding binary trees, tree traversal algorithms (inorder, preorder, postorder).",
      date: "Sunday, January 28, 2024",
      duration: "85 minutes",
      completed: true
    },
    {
      id: 4,
      title: "Binary Search Trees",
      description: "BST properties, insertion, deletion, and search operations with complexity analysis.",
      date: "Sunday, February 4, 2024",
      duration: "80 minutes",
      completed: false
    },
    {
      id: 5,
      title: "Hash Tables and Collision Resolution",
      description: "Hash functions, collision resolution strategies, and performance considerations.",
      date: "Sunday, February 11, 2024",
      duration: "75 minutes",
      completed: false
    },
    {
      id: 6,
      title: "Graph Algorithms - DFS and BFS",
      description: "Graph representation, depth-first search, and breadth-first search algorithms.",
      date: "Sunday, February 18, 2024",
      duration: "95 minutes",
      completed: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-vt-maroon to-vt-orange text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold">Course Lectures</h1>
        <p className="mt-2 opacity-90">Access lecture notes, recordings, and quizzes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Lectures</p>
              <p className="text-3xl font-bold text-vt-maroon">6</p>
            </div>
            <svg className="h-12 w-12 text-vt-maroon opacity-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-green-600">3</p>
            </div>
            <svg className="h-12 w-12 text-green-600 opacity-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming</p>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            <svg className="h-12 w-12 text-blue-600 opacity-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">All Lectures</h2>
          <p className="text-gray-600 mt-1">CS 3114 - Data Structures and Algorithms</p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {lecturesData.map((lecture) => (
            <div key={lecture.id} className="p-6 transition-all duration-200 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Lecture {lecture.id}: {lecture.title}
                    </h3>
                    {lecture.completed && (
                      <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{lecture.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span>{lecture.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{lecture.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 ml-6">
                  <Link
                    to={`/lectures/${lecture.id}/notes`}
                    className="flex items-center space-x-2 px-4 py-2 bg-vt-maroon text-white rounded-lg hover:bg-red-800 transition-colors duration-200"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                    <span>Notes</span>
                  </Link>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    <span>Quiz</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span>Recording</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lectures;
