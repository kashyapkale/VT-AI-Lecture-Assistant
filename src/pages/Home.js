import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Announcements data matching the screenshot
  const announcements = [
    {
      id: 1,
      title: "Midterm Exam Schedule Updated",
      content: "The midterm exam for CS 3114 has been moved to March 15th. Please make note of this change and prepare accordingly.",
      author: "Dr. Smith",
      time: "2 hours ago",
      priority: "high", // red border
      isPinned: true
    },
    {
      id: 2,
      title: "Office Hours Extension",
      content: "I will be extending office hours this week due to the upcoming assignment deadline. Available Monday-Wednesday 2-5 PM.",
      author: "Prof. Johnson",
      time: "1 day ago",
      priority: "medium" // yellow border
    },
    {
      id: 3,
      title: "Guest Lecture Tomorrow",
      content: "Don't miss tomorrow's guest lecture on Machine Learning Applications in Industry by Dr. Chen from Google.",
      author: "Dr. Wilson",
      time: "2 days ago",
      priority: "low" // blue border
    }
  ];

  // Discussions data matching the screenshot
  const discussions = [
    {
      id: 1,
      title: "Help with Assignment 3 - Dynamic Programming",
      content: "I'm struggling with the recursive approach for the knapsack problem. Has anyone figured out the optimal substructure?",
      author: "Alex Chen",
      time: "30 minutes ago",
      replies: 7,
      upvotes: 12,
      downvotes: 1,
      tags: ["assignment", "algorithms", "help"]
    },
    {
      id: 2,
      title: "Study Group for Midterm",
      content: "Looking to form a study group for the upcoming CS 3114 midterm. Planning to meet this weekend at the library.",
      author: "Maria Rodriguez",
      time: "2 hours ago",
      replies: 15,
      upvotes: 8,
      downvotes: 0,
      tags: ["study-group", "midterm"]
    },
    {
      id: 3,
      title: "Interesting Article on Tree Algorithms",
      content: "Found this great article on optimizing tree traversal algorithms. Thought it might be helpful for our current topics.",
      author: "James Park",
      time: "5 hours ago",
      replies: 3,
      upvotes: 20,
      downvotes: 2,
      tags: ["resources", "algorithms"]
    }
  ];

  const getPriorityBorderColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-vt-maroon to-vt-orange text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold">Course Dashboard</h1>
        <p className="mt-2 opacity-90">Stay updated with announcements and join discussions</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Announcements Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <svg className="mr-2 text-vt-maroon h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                Announcements
              </h2>
            </div>
          </div>
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {announcements.map((announcement) => (
              <div key={announcement.id} className={`border-l-4 p-4 rounded-r-lg transition-all duration-200 hover:shadow-md ${getPriorityBorderColor(announcement.priority)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {announcement.isPinned && (
                        <svg className="h-4 w-4 text-vt-maroon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <line x1="12" x2="12" y1="17" y2="22"></line>
                          <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
                        </svg>
                      )}
                      <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{announcement.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>By {announcement.author}</span>
                      <span className="flex items-center">
                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {announcement.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussions Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <svg className="mr-2 text-vt-maroon h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                Discussions
              </h2>
              <button className="bg-vt-maroon text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors duration-200 flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span>New Post</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vt-maroon focus:border-transparent"
                />
              </div>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                <select 
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vt-maroon focus:border-transparent"
                >
                  <option value="all">All Topics</option>
                  <option value="assignment">Assignments</option>
                  <option value="help">Help</option>
                  <option value="study-group">Study Groups</option>
                  <option value="resources">Resources</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="border border-gray-200 rounded-lg p-4 hover:border-vt-maroon transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 hover:text-vt-maroon transition-colors duration-200">
                    {discussion.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="mr-1 h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                      </svg>
                      {discussion.replies}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 text-green-600 hover:text-green-700">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M7 10v12"></path>
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                        </svg>
                        <span>{discussion.upvotes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-red-600 hover:text-red-700">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M17 14V2"></path>
                          <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                        </svg>
                        <span>{discussion.downvotes}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-3">{discussion.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>{discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.time}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {discussion.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 