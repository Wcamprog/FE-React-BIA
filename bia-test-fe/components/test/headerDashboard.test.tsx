import HeaderDashboard from "../headerDashboard";
import { render } from "@testing-library/react";

describe("HeaderDashboard", () => {
  it("renders correctly", () => {
    const { getByText } = render(<HeaderDashboard />);
    expect(getByText("Where in the world?")).toBeInTheDocument(); 
    expect(getByText("Dark Mode")).toBeInTheDocument(); 
  });
});
