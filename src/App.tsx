import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<h2>Página Entities</h2>} />
        </Routes>
      </main>
    </div>
  );
}
