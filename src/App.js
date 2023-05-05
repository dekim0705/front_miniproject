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
import FindAccountPage from './pages/FindAccountPage';
import JoinPage from './pages/JoinPage';
import WritePage from './pages/WritePage';
import PostDetailPage from './pages/PostDetailPage';
import UserStore from './context/UserInfo';
import ChatStore from './context/ChatInfo';
import MyProfilePage from './pages/MyProfilePage';
import ChatPage from './pages/ChatPage';
import EditPage from './pages/EditPage';
import ResetPwdPage from './pages/ResetPwdPage';

function App() {
  
  /* 강사님 React '리액트 라우터로 SPA' 참고 */
  return (
    <UserStore>
      <ChatStore>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/mentor/*' element={<MentorPage />}></Route>
            <Route path='/information/:pageNum' element={<InformationPage />}></Route>
            <Route path='/Portfolio/:pageNum' element={<PortfolioPage />}></Route>
            <Route path='/worker/:pageNum' element={<WorkerPage />} />
            <Route path='/best/:pageNum' element={<BestPage />}></Route>
            <Route path='/qna/:pageNum' element={<QnAPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/findaccount' element={<FindAccountPage />}></Route>
            <Route path='/resetpassword' element={<ResetPwdPage />}></Route>
            <Route path='/join/*' element={<JoinPage />}></Route>
            <Route path='/write' element={<WritePage />}></Route>
            <Route path='/edit' element={<EditPage />}></Route>
            <Route path='/mypage' element={<MyProfilePage />}></Route>
            <Route path='/chat' element={<ChatPage />}></Route>
            <Route path='/post/:postNum' element={<PostDetailPage />}></Route>
          </Routes>
        </Router>
      </ChatStore>
    </UserStore>
  );
}
export default App;
