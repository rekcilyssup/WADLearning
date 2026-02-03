export enum ContentType {
  Text = 'TEXT',
  Code = 'CODE',
  List = 'LIST',
  Image = 'IMAGE',
  Table = 'TABLE',
  Note = 'NOTE'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ExamQuestion {
  question: string;
  answer: string;
  diagramUrl?: string;
}

export interface ContentBlock {
  type: ContentType;
  content: string | string[]; // For lists, it's an array of strings
  title?: string;
  language?: string; // For code blocks
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
  quiz?: QuizQuestion[];
  examQuestions?: ExamQuestion[];
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  lessons: Lesson[];
}