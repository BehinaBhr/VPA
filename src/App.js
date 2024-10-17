import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./utils/auth.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/events" element={<Events />} />
              <Route
                path="/events/new"
                element={
                  <ProtectedRoute>
                    <NewEvent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events/:eventId/edit"
                element={
                  <ProtectedRoute>
                    <EditEvent />
                  </ProtectedRoute>
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/gallery/new"
                element={
                  <ProtectedRoute>
                    <NewAlbum />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/gallery/:albumId/edit"
                element={
                  <ProtectedRoute>
                    <EditAlbum />
                  </ProtectedRoute>
                }
              />
              <Route path="/join" element={<Join />} />
              <Route path="/links" element={<Links />} />
              <Route
                path="/links/new"
                element={
                  <ProtectedRoute>
                    <NewLink />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/links/:linkId/edit"
                element={
                  <ProtectedRoute>
                    <EditLink />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/groups/new"
                element={
                  <ProtectedRoute>
                    <NewGroup />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/groups/:groupId/edit"
                element={
                  <ProtectedRoute>
                    <EditGroup />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
