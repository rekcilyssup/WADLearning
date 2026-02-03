import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestionIdx];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === question.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Quiz Completed!</h3>
        <p className="text-lg text-slate-600 mb-6">
          You scored <span className="font-bold text-indigo-600">{score}</span> out of <span className="font-bold text-slate-800">{questions.length}</span>
        </p>
        <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-1000" 
            style={{ width: `${(score / questions.length) * 100}%` }}
          ></div>
        </div>
        <button 
          onClick={resetQuiz}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h3 className="font-semibold text-slate-700 flex items-center gap-2">
          <AlertCircle size={18} className="text-indigo-500" />
          Knowledge Check
        </h3>
        <span className="text-xs font-medium bg-slate-200 text-slate-600 px-2 py-1 rounded">
          Question {currentQuestionIdx + 1}/{questions.length}
        </span>
      </div>
      
      <div className="p-6">
        <p className="text-lg font-medium text-slate-800 mb-6">{question.question}</p>
        
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let itemClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ";
            
            if (isAnswered) {
              if (idx === question.correctIndex) {
                itemClass += "border-green-200 bg-green-50 text-green-800";
              } else if (idx === selectedOption) {
                itemClass += "border-red-200 bg-red-50 text-red-800";
              } else {
                itemClass += "border-slate-100 opacity-50";
              }
            } else {
              if (selectedOption === idx) {
                itemClass += "border-indigo-600 bg-indigo-50 text-indigo-900";
              } else {
                itemClass += "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswered}
                className={itemClass}
              >
                <span>{option}</span>
                {isAnswered && idx === question.correctIndex && <CheckCircle size={20} className="text-green-600" />}
                {isAnswered && idx === selectedOption && idx !== question.correctIndex && <XCircle size={20} className="text-red-600" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
            <span className="font-bold block mb-1">Explanation:</span>
            {question.explanation}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleCheck}
            disabled={selectedOption === null}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium flex items-center gap-2"
          >
            {currentQuestionIdx < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
