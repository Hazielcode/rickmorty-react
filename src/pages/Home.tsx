import Hero from "../components/Hero";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { fetchCharacters } from "../services/api";

export default function Home() {
  const { data, loading, error } = useFetch(() => fetchCharacters(1), []);
  const characters = data ?? [];

  return (
    <>
      <Hero />
      <section>
        <h2 className="h4 mb-3">Personajes destacados</h2>
        {loading && <p>Cargando personajes...</p>}
        {error && <div className="alert alert-danger">{error.message}</div>}
        <div className="row g-3">
          {characters.slice(0, 12).map((c: any) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={c.id}>
              <Card
                title={c.name}
                subtitle={c.species}
                img={c.image}
                footer={c.status}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
