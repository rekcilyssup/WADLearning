import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { courseData } from './data';
import { Lesson } from './types';
import { Menu, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  // Default to the first lesson of the first module
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(courseData[0].lessons[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar 
        modules={courseData} 
        selectedLessonId={selectedLesson.id}
        onSelectLesson={handleLessonSelect}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between shadow-sm z-10">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-slate-800">WAD Master</span>
          <div className="w-8"></div> {/* Spacer for centering */}
        </header>

        {/* Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <ContentDisplay lesson={selectedLesson} />
          
          <footer className="max-w-4xl mx-auto pt-10 pb-6 border-t border-slate-200 text-center text-slate-400 text-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap size={16} />
              <span>Web Application Development Course</span>
            </div>
            <p>&copy; {new Date().getFullYear()} WAD Learning Platform</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;