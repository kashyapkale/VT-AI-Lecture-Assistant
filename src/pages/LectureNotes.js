import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lectures } from '../data/mockData';
import {
  ArrowLeftIcon,
  PrinterIcon,
  DocumentDuplicateIcon,
  CalendarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const LectureNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecture = lectures.find(l => l.id === parseInt(id));

  if (!lecture) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <AcademicCapIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Lecture Not Found</h2>
        <p className="text-gray-600 mb-6">The requested lecture notes could not be found.</p>
        <button
          onClick={() => navigate('/lectures')}
          className="btn-primary"
        >
          Back to Lectures
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(lecture.notes);
    alert('Notes copied to clipboard!');
  };

  // Simple markdown-to-HTML converter for basic formatting
  const formatNotes = (notes) => {
    return notes
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">{line.slice(3)}</h2>;
        }
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-6">{line.slice(2)}</h1>;
        }
        
        // Code blocks
        if (line.startsWith('```')) {
          return null; // Handle in a separate pass
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>;
        }
        
        // Bold text
        if (line.includes('**')) {
          const parts = line.split(/(\*\*.*?\*\*)/);
          return (
            <p key={index} className="mb-3 leading-relaxed">
              {parts.map((part, partIndex) => 
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={partIndex} className="font-semibold">{part.slice(2, -2)}</strong>
                ) : (
                  <span key={partIndex}>{part}</span>
                )
              )}
            </p>
          );
        }
        
        // Regular paragraphs
        if (line.trim() === '') {
          return <div key={index} className="mb-2" />;
        }
        
        return <p key={index} className="mb-3 leading-relaxed">{line}</p>;
      });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/lectures')}
          className="flex items-center text-vt-maroon hover:text-vt-maroon/80 mb-4 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Lectures
        </button>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 mb-4 lg:mb-0">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-vt-maroon text-white mr-3">
                {lecture.course}
              </span>
              <span className="text-sm text-gray-500">{lecture.duration}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {lecture.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-600">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>{formatDate(lecture.date)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCopyNotes}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <DocumentDuplicateIcon className="h-4 w-4 mr-2" />
              Copy
            </button>
            
            <button
              onClick={handlePrint}
              className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <PrinterIcon className="h-4 w-4 mr-2" />
              Print
            </button>
          </div>
        </div>
      </div>

      {/* Notes Content */}
      <div className="card print:shadow-none print:border-none">
        <div className="prose prose-gray max-w-none">
          <div className="space-y-2">
            {formatNotes(lecture.notes)}
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:shadow-none,
          .print\\:shadow-none * {
            visibility: visible;
          }
          .print\\:shadow-none {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            margin: 1in;
          }
        }
      `}</style>
    </div>
  );
};

export default LectureNotes; 