import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Entities from "./pages/Entities";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </main>
      <footer className="text-center py-4 text-muted">
        <small>Hecho con 🛸 React + Vite — Rick & Morty Universe</small>
      </footer>
    </div>
  );
}
