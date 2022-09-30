import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Header from './Components/Layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './Components/Layouts/Base';

// import Footer from './Components/Layouts/Footer';
// ..
AOS.init({duration: 1000});



function App() {
  return (
    <div >
        <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />           
          </Routes>
        </Base>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
