import React, { useState } from 'react';
import { faqData } from '../data/mockData';
import {
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(faqData.map(item => item.category))];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredFAQ.map(item => item.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Assignments': 'bg-blue-100 text-blue-800',
      'Policies': 'bg-purple-100 text-purple-800',
      'Grading': 'bg-green-100 text-green-800',
      'Projects': 'bg-orange-100 text-orange-800',
      'Programming': 'bg-indigo-100 text-indigo-800',
      'Help': 'bg-pink-100 text-pink-800',
      'Academic Support': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2">Find answers to common questions about the course</p>
      </div>

      {/* Search and Controls */}
      <div className="card mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-vt-maroon focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-vt-maroon focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex space-x-2">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm bg-vt-maroon text-white rounded-lg hover:bg-vt-maroon/90 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQ.map((item) => {
          const isExpanded = expandedItems.has(item.id);
          return (
            <div key={item.id} className="card">
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full text-left focus:outline-none focus:ring-2 focus:ring-vt-maroon focus:ring-inset rounded-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center mb-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-3 ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredFAQ.length === 0 && (
        <div className="text-center py-12">
          <QuestionMarkCircleIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-vt-light-gray rounded-lg">
          <QuestionMarkCircleIcon className="h-5 w-5 text-vt-maroon mr-2" />
          <span className="text-sm text-vt-gray">
            Showing {filteredFAQ.length} of {faqData.length} questions
          </span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-8 card bg-vt-light-gray border-vt-maroon/20">
        <div className="text-center">
          <QuestionMarkCircleIcon className="h-8 w-8 text-vt-maroon mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Reach out to your instructor during office hours
            or use the AI chat assistant for additional help.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              Contact Instructor
            </button>
            <button 
              onClick={() => window.location.href = '/chat'}
              className="btn-secondary"
            >
              Ask AI Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 