import { useState, useEffect } from "react";
// import { headers } from "../../utils/dependencies";
// import data from "../../assets/MOCK_DATA_FULL.json";
import "./Hero.css";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";

const API_URL = "http://localhost:5000"

const Hero = () => {
  ///////////////////////////STATE INFO///////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);
  const [headers, setHeaders] = useState([])
  const [data, setData] = useState([])

  ///////////////////////////FUNCTIONS////////////////////////////////////////////
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (e) => {
    setCurrentPage(1);
    setCurrentLimit(parseInt(e.target.value));
  };

  ///////////////////////////DATA FETCHING////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async() => {
      try {

        const response = await fetch(`${API_URL}/data`)
        const res = await response.json()
        console.log(res)
        setHeaders(res.headers)
        setData(res.data)
      } catch(error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div className="hero_container">
      <Table
        headers={headers}
        results={data.slice(
          (currentPage - 1) * currentLimit,
          (currentPage - 1) * currentLimit + currentLimit,
        )}
      />
      <Pagination
        page={currentPage}
        limit={currentLimit}
        totalResults={data ? data.length : 0}
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
      />
    </div>
  );
};

export default Hero;
