import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MentorPage from './pages/MentorPage';
import PortfolioPage from './pages/PortfolioPage';
import LoginPage from './pages/LoginPage';
import FindAccountPage from './pages/FindAccountPage';
import JoinPage from './pages/JoinPage';
import WritePage from './pages/WritePage';
import PostDetailPage from './pages/PostDetailPage';
import UserStore from './context/UserInfo';
import ChatStore from './context/ChatInfo';
import SearchStore from './context/SearchInfo';
import MyProfilePage from './pages/MyProfilePage';
import ChatPage from './pages/ChatPage';
import EditPage from './pages/EditPage';
import ResetPwdPage from './pages/ResetPwdPage';
import SearchResultPage from './pages/SearchResultPage';
import BoardPage from './pages/BoardPage';

function App() {
  
  /* 강사님 React '리액트 라우터로 SPA' 참고 */
  return (
    <UserStore>
      <ChatStore>
        <SearchStore>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/mentor/*' element={<MentorPage />}></Route>
              <Route path='/information/:pageNum' element={<BoardPage boardName="Information" boardNum={2} />}></Route>
              <Route path='/Portfolio/:pageNum' element={<PortfolioPage />}></Route>
              <Route path='/worker/:pageNum' element={<BoardPage boardName="Worker" boardNum={3}/>}></Route>
              <Route path='/best/:pageNum' element={<BoardPage boardName="Best" boardNum={5}/>}></Route>
              <Route path='/qna/:pageNum' element={<BoardPage boardName="QnA" boardNum={1}/>}></Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/findaccount' element={<FindAccountPage />}></Route>
              <Route path='/resetpassword' element={<ResetPwdPage />}></Route>
              <Route path='/join/*' element={<JoinPage />}></Route>
              <Route path='/write' element={<WritePage />}></Route>
              <Route path="/edit/:postNum" element={<EditPage />} />
              <Route path='/mypage/*' element={<MyProfilePage />}></Route>
              <Route path='/chat' element={<ChatPage />}></Route>
              <Route path='/post/:postNum' element={<PostDetailPage />}></Route>
              <Route path='/search' element={<SearchResultPage />}></Route>
            </Routes>
          </Router>
        </SearchStore>
      </ChatStore>
    </UserStore>
  );
}
export default App;
