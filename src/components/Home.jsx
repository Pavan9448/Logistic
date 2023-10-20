import { Outlet } from "react-router-dom";
import PieChart from "./PieChart";
import Table from "./Table";

const Home = () => {
  return (
    <div>
      <PieChart />
      <Table />
    </div>
  );
};

export default Home;
