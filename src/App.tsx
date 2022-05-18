
import './App.css';
import Header from './components/header'
import Navbar from './components/navbar'
import Homepage from './pages/homepage';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAgreement from './pages/agreement';
import Login from './pages/login';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="pages/agreement" element={<UserAgreement />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
