import React from 'react';
import { Module, Lesson } from '../types';
import { BookOpen, ChevronRight, Layout, Globe, Server, Video } from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  selectedLessonId: string;
  onSelectLesson: (lesson: Lesson) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ modules, selectedLessonId, onSelectLesson, isOpen, setIsOpen }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout size={18} />;
      case 'Globe': return <Globe size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Video': return <Video size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`
        fixed top-0 left-0 h-full bg-white border-r border-slate-200 w-72 transform transition-transform duration-300 ease-in-out z-30
        lg:translate-x-0 lg:static flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <BookOpen size={24} />
          </div>
          <h1 className="font-bold text-xl text-slate-800 tracking-tight">WAD Master</h1>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {modules.map((module) => (
            <div key={module.id} className="mb-6">
              <div className="px-6 mb-2 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                {getIcon(module.icon)}
                <span>{module.title}</span>
              </div>
              <div className="space-y-0.5">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      onSelectLesson(lesson);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-between px-6 py-2.5 text-sm transition-colors relative
                      ${selectedLessonId === lesson.id 
                        ? 'text-indigo-600 bg-indigo-50 font-medium border-r-4 border-indigo-600' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                    `}
                  >
                    <span className="truncate">{lesson.title}</span>
                    {selectedLessonId === lesson.id && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-100 text-xs text-slate-400 text-center">
          v1.0 • Based on WAD Notes
        </div>
      </div>
    </>
  );
};

export default Sidebar;
