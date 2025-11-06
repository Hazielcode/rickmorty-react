export default function Hero() {
  return (
    <div className="p-5 mb-4 bg-white rounded-3 shadow-sm">
      <div className="container py-5">
        <h1 className="display-5 fw-bold">Rick & Morty Universe</h1>
        <p className="col-lg-8 fs-5">
          Explora personajes, ubicaciones y episodios del multiverso creado por Rick y Morty.
        </p>
        <a
          className="btn btn-success btn-lg"
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noreferrer"
        >
          Ver API
        </a>
      </div>
    </div>
  );
}
