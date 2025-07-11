import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Button, Chip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Padding } from "@mui/icons-material";

export default function CountryDetailCard({
  image,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}: any) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 w-full px-4 py-6">
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        size="small"
        onClick={() => router.back()}
        sx={{
          width: { xs: "100%", md: 100 },
        }}
      >
        Back
      </Button>

      <Grid container columns={12} spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}  >
          {image?.png ? (
            <Image
              src={image.png}
              alt={image.alt || name}
              width={800}
              height={600}
              className=" object-contain bg-gray-100 rounded"
              unoptimized
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center text-gray-500 rounded">
              Imagen no disponible
            </div>
          )}
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6 }}
          className="flex flex-col justify-center gap-4"
        >
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>

          <Grid container columns={12} spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="body2">
                <strong>Native Name:</strong> {nativeName}
              </Typography>
              <Typography variant="body2">
                <strong>Population:</strong>{" "}
                {new Intl.NumberFormat().format(population)}
              </Typography>
              <Typography variant="body2">
                <strong>Region:</strong> {region}
              </Typography>
              <Typography variant="body2">
                <strong>Sub Region:</strong> {subregion}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="body2">
                <strong>Capital:</strong> {capital}
              </Typography>
              <Typography variant="body2">
                <strong>Top Level Domain:</strong> {topLevelDomain}
              </Typography>
              <Typography variant="body2">
                <strong>Currencies:</strong> {currencies.join(", ")}
              </Typography>
              <Typography variant="body2">
                <strong>Languages:</strong> {languages.join(", ")}
              </Typography>
            </Grid>
          </Grid>

          {borderCountries.length > 0 && (
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <Typography variant="body2" fontWeight="bold">
                Border Countries:
              </Typography>
              {borderCountries.map((bc: any, i: any) => (
                <Chip
                  key={i}
                  label={bc}
                  size="small"
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
