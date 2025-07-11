import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type MediaCardProps = {
  image: any;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export default function MediaCard({
  image,
  name,
  population,
  region,
  capital,
}: MediaCardProps) {
  return (
    <Card
      sx={{
        height: 400,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer", 
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "70%",
          width: "100%",
          objectFit: "cover",
        }}
        image={image?.png}
        alt={image?.alt || name}
      />

      <CardContent
        sx={{
          height: "30%",
          overflow: "hidden",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Population:</strong>{" "}
          {population ? new Intl.NumberFormat().format(population) : "N/A"}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Region:</strong> {region}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Capital:</strong> {capital || "N/A"}
        </Typography>
      </CardContent>
    </Card>
  );
}
