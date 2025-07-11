import React from "react";
import { render, screen } from "@testing-library/react";
import MediaCard from "../CardCountry";

describe("MediaCard", () => {
  const mockProps = {
    image: {
      png: "https://flagcdn.com/w320/co.png",
      alt: "Flag of Colombia",
    },
    name: "Colombia",
    population: 50882891,
    region: "Americas",
    capital: "Bogotá",
  };

  it("renders all country info correctly", () => {
    render(<MediaCard {...mockProps} />);

    expect(screen.getByText("Colombia")).toBeInTheDocument();
    expect(screen.getByText(/Population:/)).toBeInTheDocument();
    expect(screen.getByText(/50,882,891/)).toBeInTheDocument(); 
    expect(screen.getByText(/Region:/)).toBeInTheDocument();
    expect(screen.getByText("Americas")).toBeInTheDocument();
    expect(screen.getByText(/Capital:/)).toBeInTheDocument();
    expect(screen.getByText("Bogotá")).toBeInTheDocument();

    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image).toHaveAttribute("src", mockProps.image.png);
    expect(image).toHaveAttribute("alt", mockProps.image.alt);
  });
});
