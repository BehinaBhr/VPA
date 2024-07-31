import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
// import Members from "./pages/Members/Members";
import Links from "./pages/Links/Links.js";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/members" element={<Members />} />*/}
            <Route path="/links" element={<Links />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
