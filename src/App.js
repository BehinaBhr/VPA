import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import NewEvent from "./pages/Events/NewEvent/NewEvent";
import EditEvent from "./pages/Events/EditEvent/EditEvent";
import Gallery from "./pages/Gallery/Gallery";
import NewAlbum from "./pages/Gallery/NewAlbum/NewAlbum";
import EditAlbum from "./pages/Gallery/EditAlbum/EditAlbum";
import Join from "./pages/Join/Join";
import Links from "./pages/Links/Links.js";
import NewLink from "./pages/Links/NewLink/NewLink";
import EditLink from "./pages/Links/EditLink/EditLink";
import NewGroup from "./pages/Links/NewGroup/NewGroup";
import EditGroup from "./pages/Links/EditGroup/EditGroup";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/new" element={<NewEvent />} />
            <Route path="/events/:eventId/edit" element={<EditEvent />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/new" element={<NewAlbum />} />
            <Route path="/gallery/:albumId/edit" element={<EditAlbum />} />
            <Route path="/join" element={<Join />} />
            <Route path="/links" element={<Links />} />
            <Route path="/links/new" element={<NewLink />} />
            <Route path="/links/:linkId/edit" element={<EditLink />} />
            <Route path="/groups/new" element={<NewGroup />} />
            <Route path="/groups/:groupId/edit" element={<EditGroup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
