import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Pages/Home/Home";
import Properties from "./Components/Pages/Properties/Properties";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;