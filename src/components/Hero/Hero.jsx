import { useState } from "react";

import "./Hero.css";
import data from "../../assets/MOCK_DATA_FULL.json";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";

const Hero = () => {
  ///////////////////////////STATE INFO///////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);

  ///////////////////////////FUNCTIONS////////////////////////////////////////////
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (e) => {
    setCurrentLimit(parseInt(e.target.value));
  };

  return (
    <div className="hero_container">
      <Table
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
