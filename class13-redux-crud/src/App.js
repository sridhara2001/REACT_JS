import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import Create from './components/create/Create';
import Home from './components/home/Home';
import Pnf from './components/pnf/Pnf';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer autoClose={3000} position={"top-right"} />
      <Routes>
        <Route path={``} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
