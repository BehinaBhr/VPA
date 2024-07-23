import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import About from "./pages/About/About";
// import Activity from "./pages/Activity/Activity";
// import Contribute from "./pages/Contribute/Contribute";
import Contact from "./pages/Contact/Contact";
// import Resource from "./pages/Resources/Resource";
import NotFound from "./pages/NotFound/NotFound";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {/* <Route path="/" element={<About />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/contribute" element={<Contribute/>} />
            <Route path="/resource" element={<Resource />} /> */}
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

