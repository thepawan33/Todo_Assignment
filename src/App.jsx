import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatComponentPage from "./pages/CatComponentPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cat" element={<CatComponentPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
