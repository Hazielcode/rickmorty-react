const BASE = "https://rickandmortyapi.com/api";

export async function fetchCharacters(page = 1) {
  const res = await fetch(`${BASE}/character?page=${page}`);
  if (!res.ok) throw new Error(`Error ${res.status} al obtener los personajes`);
  const data = await res.json();
  return data.results; // Devuelve solo el array de personajes
}
