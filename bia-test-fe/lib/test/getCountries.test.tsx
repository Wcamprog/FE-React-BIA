import { getCountries, getCountry } from "../getCountries";

global.fetch = jest.fn();

describe("API Utilities", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getCountries", () => {
    it("returns countries when fetch is successful", async () => {
      const mockCountries = [
        { name: { common: "Colombia" }, region: "Americas" },
        { name: { common: "Germany" }, region: "Europe" },
        { name: { common: "Kenya" }, region: "Africa" },
      ];

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCountries,
      });

      const result = await getCountries();

      expect(fetch).toHaveBeenCalledWith(
        "https://restcountries.com/v3.1/independent?status=true",
        { next: { revalidate: 3600 } }
      );

      expect(result.countries).toEqual(mockCountries);
      expect(result.regions).toEqual(["Africa", "Americas", "Europe"]);
    });

    it("throws error when fetch fails", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

      await expect(getCountries()).rejects.toThrow("Error al cargar países");
    });
  });

  describe("getCountry", () => {
    it("returns country data when fetch is successful", async () => {
      const mockCountry = [{ name: { common: "Colombia" } }];

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCountry,
      });

      const result = await getCountry("colombia");

      expect(fetch).toHaveBeenCalledWith(
        "https://restcountries.com/v3.1/name/colombia",
        { next: { revalidate: 3600 } }
      );

      expect(result).toEqual(mockCountry);
    });

    it("throws error when fetch fails", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

      await expect(getCountry("noexists")).rejects.toThrow(
        "Error al cargar país"
      );
    });
  });
});
