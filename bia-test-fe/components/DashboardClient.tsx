"use client";

import { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

import MediaCard from "./CardCountry";
import SearchInput from "./searchComponent"; 
import { getCountries } from "../lib/getCountries"; 

export default function DashboardClient() {
  const [countries, setCountries] = useState<any[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Se realiza consulta a la API a traves de la funcion getCountries
        const { countries, regions } = await getCountries();
        setCountries(countries); // se asignan los paises y regiones
        setRegions(regions);
        setFilteredCountries(countries); // se asignan los paises filtrados
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); // se cambia el estado de carga independientemente de si hubo un error
      }
    };
    fetchCountries();
  }, []);

  const filterCountries = (searchTerm: string, region: string) => {
    const lower = searchTerm.toLowerCase();

    const result = countries.filter((c: any) => {
      const matchesName = c.name.common.toLowerCase().includes(lower);
      const matchesRegion = region ? c.region === region : true;
      // Se filtra por el país y la region en caso de tener alguna región seleccionada
      return matchesName && matchesRegion;
    });

    setFilteredCountries(result);
  };

  const debouncedFilter = useMemo(
    () => debounce(filterCountries, 300),
    [countries]
    // Se usa debounce para mejorar la performance de la busqueda
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedFilter(value, selectedRegion); // se llama a la busqueda
  };

  const handleRegionFilter = (region: string) => {
    setSelectedRegion(region);
    debouncedFilter(search, region); // se llama a la busqueda
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <CircularProgress disableShrink />
      </div>
    ); // se muestra un spinner mientras se cargan los paises
  }

  return (
    <main className="p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="w-full md:w-1/2">
          <SearchInput value={search} onChange={handleSearch} />
        </div> 

        <div className="w-full md:w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="region-select-label">Filter By Region</InputLabel>
              <Select
                labelId="region-select-label"
                id="region-select"
                value={selectedRegion}
                label="Filter By Region"
                onChange={(e) => handleRegionFilter(e.target.value)}
              >
                <MenuItem value="">All Regions</MenuItem>
                {regions.map((region: string) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      {/* se muestran los paises en cards, para que sean clickeables y se vea más limpio el código */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {filteredCountries.map((country: any) => (
          <Link
            href={`/dashboard/country/${encodeURIComponent(
              country.region
            )}/${encodeURIComponent(country.name.common)}`}
            key={country.name.common}
          >
            <MediaCard
              image={country.flags}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital?.join(", ") || "N/A"}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
