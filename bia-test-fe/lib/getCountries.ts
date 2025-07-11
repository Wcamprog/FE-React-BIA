export async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/independent?status=true",
    {
      next: { revalidate: 3600 },
    }
  ); // Api para obtener los paises

  if (!res.ok) throw new Error("Error al cargar países");

  const countries = await res.json();

  const regionSet = new Set<string>();
  countries.forEach((country: any) => {
    if (country.region) {
      regionSet.add(country.region);
    }
  }); // Filtrado para obtener las regiones un un indice unico

  const regions = Array.from(regionSet).sort();

  return { countries, regions }; // se devuelve la data de los paises y las regiones
}


export async function getCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}`,
    {
      next: { revalidate: 3600 },
    }
  ); // Api para obtener el pais indicado, este puede tener varios paises por si se llaman igual
  // Por eso, cuando se hace esta peticion, se filtra tambien por region donde se hace el llamado

  if (!res.ok) throw new Error("Error al cargar país");

  return res.json();
}