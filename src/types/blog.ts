export interface TableRow {
  [key: string]: string | number;
}

export interface TableData {
  title: string;
  headers: string[];
  rows: TableRow[];
  type: 'comparison' | 'checklist' | 'standard';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface BlogSection {
  type: 'h2' | 'h3' | 'paragraph' | 'list' | 'table' | 'callout' | 'steps';
  content?: string; // For headers, paragraphs
  items?: string[]; // For lists, steps
  table?: TableData; // For tables
  variant?: 'summary' | 'mistake' | 'info'; // For callouts
  id?: string; // For TOC linking
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  toc: { id: string; title: string }[];
  sections: BlogSection[];
  faqs: FAQ[];
  glossary: GlossaryTerm[];
  relatedSlugs: string[];
}
