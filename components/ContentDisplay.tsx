import React, { useState } from 'react';
import { Lesson, ContentType } from '../types';
import Quiz from './Quiz';
import { Code, Terminal, AlertTriangle, FileText, BookOpenCheck, ChevronDown, ChevronUp, ImageIcon } from 'lucide-react';

interface ContentDisplayProps {
  lesson: Lesson;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ lesson }) => {
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (idx: number) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-8 border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{lesson.title}</h1>
        <p className="text-lg text-slate-600 leading-relaxed">{lesson.description}</p>
      </div>

      <div className="space-y-10">
        {lesson.blocks.map((block, index) => {
          switch (block.type) {
            case ContentType.Text:
              return (
                <div key={index} className="prose prose-slate max-w-none">
                  {block.title && <h3 className="text-xl font-bold text-slate-800 mb-4">{block.title}</h3>}
                  <div className="text-slate-700 leading-7 whitespace-pre-line text-[1.05rem]">
                    {block.content.toString().split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-indigo-900 font-bold">{part}</strong> : part
                    )}
                  </div>
                </div>
              );
            
            case ContentType.Code:
              return (
                <div key={index} className="my-6 rounded-xl overflow-hidden border border-slate-200 bg-[#1e1e1e] shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#3e3e3e]">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 font-bold">
                      <Code size={14} />
                      <span className="uppercase tracking-wider">{block.language || 'Code'}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                  <div className="p-5 overflow-x-auto custom-scrollbar">
                    <pre className="font-mono text-sm text-gray-300 leading-relaxed">
                      <code>{block.content}</code>
                    </pre>
                  </div>
                  {/* Simulated output area for HTML */}
                  {block.language === 'html' && (
                    <div className="border-t border-slate-700 bg-white">
                      <div className="px-4 py-1.5 bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-mono flex items-center gap-2 uppercase tracking-wide font-semibold">
                        <Terminal size={12} />
                        Live Preview
                      </div>
                      <div className="p-6 bg-white prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: block.content as string }}></div>
                    </div>
                  )}
                </div>
              );

            case ContentType.List:
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  {block.title && <h3 className="text-lg font-bold text-slate-800 mb-4">{block.title}</h3>}
                  <ul className="space-y-3">
                    {(block.content as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 group">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform"></span>
                        <span className="leading-relaxed text-[1.05rem]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );

            case ContentType.Note:
              return (
                <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-6 flex gap-4 shadow-sm">
                  <div className="shrink-0 mt-0.5 text-amber-500">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <strong className="block text-amber-900 mb-1 font-bold uppercase tracking-wider text-xs">Important Note</strong>
                    <p className="text-amber-900 text-[1rem] leading-relaxed font-medium">{block.content}</p>
                  </div>
                </div>
              );

            case ContentType.Table:
              const rows = (block.content as string).split('\n');
              const header = rows[0].split('|');
              const bodyRows = rows.slice(1);
              
              return (
                <div key={index} className="my-8">
                  {block.title && <h3 className="text-lg font-bold text-slate-800 mb-3">{block.title}</h3>}
                  <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
                    <table className="w-full text-sm text-left border-collapse">
                      <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                        <tr>
                          {header.map((h, i) => <th key={i} className="px-6 py-4 font-bold border-b border-slate-200">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {bodyRows.map((row, i) => (
                          <tr key={i} className="bg-white border-b border-slate-100 hover:bg-slate-50/80 transition-colors last:border-0">
                            {row.split('|').map((cell, j) => (
                              <td key={j} className={`px-6 py-4 text-slate-600 ${j === 0 ? 'font-medium text-slate-900' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}

        {/* Exam Questions Section - High Visibility Highlight */}
        {lesson.examQuestions && lesson.examQuestions.length > 0 && (
          <div className="mt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-3xl p-8 border-2 border-amber-200 shadow-lg relative overflow-hidden group">
            
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-amber-200/60">
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-3 rounded-2xl shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <BookOpenCheck size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-amber-900 tracking-tight">Long Answer Questions</h2>
                  <p className="text-amber-800/80 text-sm font-medium">Practice these for your upcoming exams</p>
                </div>
              </div>
              
              <div className="grid gap-6">
                {lesson.examQuestions.map((q, idx) => {
                  const isExpanded = expandedAnswers[idx];
                  return (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl border-l-8 border-orange-400 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="p-6 flex flex-col md:flex-row gap-5">
                        <div className="shrink-0">
                          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-700 border border-orange-200">
                            <span className="text-xs font-bold uppercase text-orange-400">Q</span>
                            <span className="text-lg font-extrabold leading-none">{idx + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-800 font-bold text-lg leading-relaxed">{q.question}</p>
                          <div className="mt-3 flex gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              10 Marks
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                              Essay Type
                            </span>
                            {q.diagramUrl && (
                               <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <ImageIcon size={12} /> Diagram
                              </span>
                            )}
                          </div>
                        </div>
                        <button 
                          onClick={() => toggleAnswer(idx)}
                          className={`self-start md:self-center p-2 rounded-full transition-colors ${isExpanded ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500 hover:bg-orange-50'}`}
                        >
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>

                      {/* Expandable Answer Section */}
                      {isExpanded && (
                        <div className="px-6 pb-6 pt-0 animate-in slide-in-from-top-2 duration-200">
                          <div className="p-5 bg-orange-50/50 rounded-xl border border-orange-100">
                            <h4 className="text-sm uppercase tracking-wider font-bold text-orange-800 mb-3 flex items-center gap-2">
                              <FileText size={14} /> Model Answer
                            </h4>
                            <div className="prose prose-sm prose-orange max-w-none text-slate-700 whitespace-pre-wrap">
                              {q.answer.split('```').map((part, i) => {
                                if (i % 2 === 1) {
                                  // Code block
                                  return (
                                    <pre key={i} className="bg-slate-800 text-slate-200 p-3 rounded-lg overflow-x-auto my-3 text-xs font-mono">
                                      {part}
                                    </pre>
                                  );
                                } else {
                                  // Normal text
                                  return (
                                    <span key={i} dangerouslySetInnerHTML={{ 
                                      __html: part.replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-900">$1</strong>')
                                                  .replace(/\n/g, '<br/>')
                                    }} />
                                  );
                                }
                              })}
                            </div>
                            
                            {/* Diagram Display */}
                            {q.diagramUrl && (
                              <div className="mt-6">
                                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Diagram</h4>
                                <div className="bg-white p-2 rounded-lg border border-slate-200 inline-block shadow-sm">
                                  <img 
                                    src={q.diagramUrl} 
                                    alt="Diagram for question" 
                                    className="max-w-full h-auto rounded"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {lesson.quiz && lesson.quiz.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-indigo-600 text-white p-1.5 rounded-lg text-sm">TEST</span>
              Knowledge Check
            </h2>
            <Quiz questions={lesson.quiz} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;