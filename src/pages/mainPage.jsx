import React from "react";
import CurrentDate from "../components/Date/CurrentDate.jsx";
import Search from "../components/Search/Search.jsx";

const mainPage = () => {
  return (
    <div>
      <Search />
      <CurrentDate />
    </div>
  );
};

export default mainPage;
