"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CountryDetailCard from "@/../components/country";
import { getCountry } from "@/../lib/getCountries";
import Header from "@/../components/headerDashboard";
import { CircularProgress, Alert } from "@mui/material";

export default function CountriePage() {
  const { name, region } = useParams() as { name: string; region: string };
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCountry(decodeURIComponent(name));
        const matchedCountry = result.find(
          (c: any) =>
            c.name.common.toLowerCase() ===
              decodeURIComponent(name).toLowerCase() &&
            c.region.toLowerCase() === decodeURIComponent(region).toLowerCase()
        );
        if (!matchedCountry) {
          setNotFound(true);
        } else {
          setCountry(matchedCountry);
        }
      } catch (error) {
        console.error("Error:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name, region]);

  // Redirigir si no se encuentra el país después de 2 segundos
  useEffect(() => {
    if (notFound) {
      const timeout = setTimeout(() => {
        router.back();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [notFound, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <CircularProgress disableShrink />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="p-4">
        <Alert severity="error">Error: Country not found. Redirecting...</Alert>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="p-6">
        <CountryDetailCard
          image={country.flags}
          name={country.name?.common}
          nativeName={country.name?.official}
          population={country.population}
          region={country.region}
          subregion={country.subregion || "N/A"}
          capital={country.capital?.join(", ") || "N/A"}
          topLevelDomain={country.tld?.join(", ") || "N/A"}
          currencies={Object.values(country.currencies || {}).map(
            (c: any) => c?.symbol
          )}
          languages={Object.values(country.languages || {})}
          borderCountries={country.borders || []}
        />
      </main>
    </>
  );
}
