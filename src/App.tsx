import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { RouterWrapper } from './next/RouterWrapper';
import { careerPages } from './data/careerPages';
import { CareerPage } from './pages/CareerPage';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {careerPages.map((page) => (
            <Route key={page.path} path={page.path} element={<CareerPage page={page} />} />
          ))}
        </Routes>
      </Layout>
    </RouterWrapper>
  );
}

export default App;
