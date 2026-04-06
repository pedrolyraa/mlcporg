import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
// Using lazy loading for pages to improve performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Events = React.lazy(() => import('./pages/Events'));
const JoinUs = React.lazy(() => import('./pages/JoinUs'));
const SOS = React.lazy(() => import('./pages/SOS'));
const Multiply = React.lazy(() => import('./pages/Multiply'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <React.Suspense fallback={<div className="h-screen flex items-center justify-center bg-mlcp-black text-mlcp-white">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="o-movimento" element={<About />} />
            <Route path="eventos" element={<Events />} />
            <Route path="faca-parte" element={<JoinUs />} />
            <Route path="sos-homem" element={<SOS />} />
            <Route path="leve-o-mlcp" element={<Multiply />} />
            <Route path="testemunhos" element={<Testimonials />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
