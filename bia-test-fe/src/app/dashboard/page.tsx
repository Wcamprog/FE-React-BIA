import { getCountries } from "../../../lib/getCountries";
import Header from "../../../components/headerDashboard";
import { FaSearch } from "react-icons/fa";
import DashboardClient from "../../../components/DashboardClient";

export default async function Dashboard() {
  const { countries, regions } = await getCountries();
  return (
    <>
        <Header />
        <DashboardClient />
    </>
  );
}
