import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Lectures from './pages/Lectures';
import LectureNotes from './pages/LectureNotes';
import Grades from './pages/Grades';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/lectures/:id/notes" element={<LectureNotes />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 