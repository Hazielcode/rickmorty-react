import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-light min-vh-100">
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<h1>Rick & Morty Universe</h1>} />
          <Route path="/entities" element={<h2>Página Entities</h2>} />
        </Routes>
      </main>
    </div>
  );
}
