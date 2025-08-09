import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Chat with AI', href: '/chat', icon: ChatBubbleLeftRightIcon },
    { name: 'Lectures', href: '/lectures', icon: AcademicCapIcon },
    { name: 'Grades', href: '/grades', icon: ChartBarIcon },
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo and Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-vt-maroon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VT</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">AI Assistant</h1>
                <p className="text-sm text-vt-gray">Virginia Tech</p>
              </div>
            </div>
            <button
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
              onClick={() => setIsSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setIsSidebarOpen(false);
                  }}
                  className={`sidebar-item w-full ${
                    isActive(item.href) ? 'active' : ''
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center text-xs text-vt-gray">
              <p>Virginia Tech</p>
              <p className="text-vt-maroon font-medium">2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Mobile header */}
        <div className="sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm lg:hidden">
          <button
            type="button"
            className="text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-vt-maroon rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">VT</span>
            </div>
            <span className="font-semibold text-gray-900">AI Assistant</span>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 