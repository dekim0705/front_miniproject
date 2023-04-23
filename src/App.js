import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MentorPage from './pages/MentorPage';
import InformationPage from './pages/InformationPage';
import PortfolioPage from './pages/PortfolioPage';
import WorkerPage from './pages/WorkerPage';
import BestPage from './pages/BestPage';
import QnAPage from './pages/QnAPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  
  /* 강사님 React '리액트 라우터로 SPA' 참고 */
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mentor' element={<MentorPage />}></Route>
        <Route path='/information' element={<InformationPage />}></Route>
        <Route path='/portfolio' element={<PortfolioPage />}></Route>
        <Route path='/worker' element={<WorkerPage />}></Route>
        <Route path='/best' element={<BestPage />}></Route>
        <Route path='/qna' element={<QnAPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/join' element={<JoinPage />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
