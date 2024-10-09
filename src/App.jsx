import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Mixture from "./components/Mixture/Mixture";
import About from "./components/About/About";
import Contect from "./components/Contect/Contect"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mixture />} />
          <Route path="/about" element={<About/ >} />
          <Route path="/contect-us" element={<Contect/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}
