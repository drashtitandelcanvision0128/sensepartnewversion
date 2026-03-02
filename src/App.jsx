import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs/Blogs";
import Services from "./components/Services/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;