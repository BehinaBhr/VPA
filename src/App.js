import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import About from "./pages/About/About";
// import Events from "./pages/Events/Events";
// import Contact from "./pages/Contact/Contact";
// import Resources from "./pages/Resources/Resources";
// import NotFound from "./pages/NotFound/NotFound";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contribute" element={<Contribute/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

