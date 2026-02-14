import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
// Career Paths removed
import { Exams } from './pages/Exams';
import { ExamDetail } from './pages/ExamDetail';
import { Roadmaps } from './pages/Roadmaps';
import { RoadmapDetail } from './pages/RoadmapDetail';
import { PYQs } from './pages/practice/PYQs';
import { SubjectTests } from './pages/practice/SubjectTests';
import { MockTests } from './pages/practice/MockTests';
import { Courses } from './pages/Courses';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { PracticeHub } from './pages/practice/PracticeHub';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Career Path Routes Removed */}
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/:slug" element={<ExamDetail />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/roadmaps/:slug" element={<RoadmapDetail />} />
          
          {/* Practice Routes */}
          <Route path="/pyqs" element={<PYQs />} />
          <Route path="/subject-wise-tests" element={<SubjectTests />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/practice" element={<PracticeHub />} /> {/* Fallback/Landing */}

          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </RouterWrapper>
  );
}

export default App;
