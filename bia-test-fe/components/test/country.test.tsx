import { render, screen } from "@testing-library/react";
import CountryDetailCard from "../country";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

describe("CountryDetailCard", () => {
  const mockProps = {
    image: { png: "/flag.png", alt: "Mock Flag" },
    name: "Colombia",
    nativeName: "República de Colombia",
    population: 50000000,
    region: "Americas",
    subregion: "South America",
    capital: "Bogotá",
    topLevelDomain: ".co",
    currencies: ["COP"],
    languages: ["Spanish"],
    borderCountries: ["Brazil", "Ecuador"],
  };

  it("renders country name and capital", () => {
    render(<CountryDetailCard {...mockProps} />);

    expect(screen.getByText("Colombia")).toBeInTheDocument();
    expect(screen.getByText(/Bogotá/)).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("renders border countries", () => {
    render(<CountryDetailCard {...mockProps} />);
    expect(screen.getByText("Brazil")).toBeInTheDocument();
    expect(screen.getByText("Ecuador")).toBeInTheDocument();
  });

  it("renders image with correct alt", () => {
    render(<CountryDetailCard {...mockProps} />);
    const image = screen.getByAltText("Mock Flag");
    expect(image).toBeInTheDocument();
  });
});
