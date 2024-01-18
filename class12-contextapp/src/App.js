import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import { ToastContainer } from 'react-toastify';
import Pnf from './components/pnf/Pnf';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer autoClose={4000} position={"top-right"} />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/users`} element={<Users />} />
        <Route path={`/posts`} element={<Posts />} />
        <Route path={`/comments`} element={<Comments />} />
        <Route path={`/users`} element={<Users />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
