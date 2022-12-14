import results from "../../assets/MOCK_DATA_SMALL.json";
import Table from "../Table/Table";

const Hero = () => {
  console.log(results);
  return <Table results={results} />;
};

export default Hero;
