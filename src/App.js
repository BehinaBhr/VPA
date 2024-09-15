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
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./utils/auth.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };

    checkAuth();

    // Listen to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/events" element={<Events />} />
              <Route
                path="/events/new"
                element={
                  <ProtectedRoute user={user}>
                    <NewEvent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events/:eventId/edit"
                element={
                  <ProtectedRoute user={user}>
                    <EditEvent />
                  </ProtectedRoute>
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/new" element={<NewAlbum />} />
              <Route path="/gallery/:albumId/edit" element={<EditAlbum />} />
              <Route path="/join" element={<Join />} />
              <Route path="/links" element={<Links />} />
              <Route
                path="/links/new"
                element={
                  <ProtectedRoute user={user}>
                    <NewLink />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/links/:linkId/edit"
                element={
                  <ProtectedRoute user={user}>
                    <EditLink />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/groups/new"
                element={
                  <ProtectedRoute user={user}>
                    <NewGroup />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/groups/:groupId/edit"
                element={
                  <ProtectedRoute user={user}>
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
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
