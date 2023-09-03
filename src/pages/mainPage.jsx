import React from "react";
import CurrentDate from "../components/Date/CurrentDate.jsx";
import Search from "../components/Search/Search.jsx";
import Location from "../components/Location/Location.jsx";

const mainPage = () => {
  return (
    <div>
      <Search />
      <CurrentDate />
      <Location />
    </div>
  );
};

export default mainPage;
