import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import MyPage from './pages/MyPage.js';
import PostDetail from './pages/PostDetail.js';
import Edit from './pages/Edit.js';
import Write from './pages/Write.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/myPage" element={<MyPage/>}/>
          <Route path="/posts/:postId" element={<PostDetail/>}/> {/* 각 게시글 */}
          <Route path="/posts/:postId/edit" element={<Edit/>}/> {/* 게시글 수정 */}
          <Route path="/write" element={<Write/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
