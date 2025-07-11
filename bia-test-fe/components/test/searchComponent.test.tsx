import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../searchComponent";

describe("SearchInput", () => {
  it("renders input with placeholder", () => {
    render(<SearchInput value="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText("Search for a country...");
    expect(input).toBeInTheDocument();
  });

  it("renders the search icon", () => {
    const { container } = render(<SearchInput value="" onChange={() => {}} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(input, { target: { value: "Colombia" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
