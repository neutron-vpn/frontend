
import './App.css';
import Header from './components/header'
import Navbar from './components/navbar'
import Homepage from './pages/homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAgreement from './pages/agreement';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="pages/agreement" element={<UserAgreement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
