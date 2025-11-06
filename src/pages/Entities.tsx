import Card from "../components/Card";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchCharacters } from "../services/api";

export default function Entities() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(() => fetchCharacters(page), [page]);
  const list = data ?? [];

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h3 mb-0">Entities</h1>
        <div className="btn-group">
          <button
            className="btn btn-outline-secondary"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button className="btn btn-secondary" disabled>
            {page}
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <div className="alert alert-danger">{error.message}</div>}

      <div className="row g-3">
        {list.map((c: any) => (
          <div className="col-12 col-sm-6 col-lg-4" key={c.id}>
            <Card
              title={c.name}
              subtitle={`Especie: ${c.species}`}
              img={c.image}
              footer={`Género: ${c.gender}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
