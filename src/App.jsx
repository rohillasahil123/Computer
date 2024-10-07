import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Mixture from "./components/Mixture/Mixture";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mixture />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}
