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
import WritePage from './pages/WritePage';
import PostDetailPage from './pages/PostDetailPage';
import UserStore from './context/UserInfo';
import MyProfilePage from './pages/MyProfilePage';
import ChatPage from './pages/ChatPage';

function App() {
  
  /* 강사님 React '리액트 라우터로 SPA' 참고 */
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mentor/*' element={<MentorPage />}></Route>
          <Route path='/information/:pageNum?' element={<InformationPage />}></Route>
          <Route path='/portfolio' element={<PortfolioPage />}></Route>
          <Route path='/worker/:pageNum' element={<WorkerPage />} />
          <Route path='/best/:pageNum' element={<BestPage />}></Route>
          <Route path='/qna/:pageNum' element={<QnAPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/join' element={<JoinPage />}></Route>
          <Route path='/write' element={<WritePage />}></Route>
          <Route path='/mypage' element={<MyProfilePage />}></Route>
          <Route path='/chat' element={<ChatPage />}></Route>
          <Route path='/post' element={<PostDetailPage />}></Route>
        </Routes>
      </Router>
    </UserStore>
  );
}
export default App;
