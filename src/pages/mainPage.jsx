import React from "react";
import CurrentDate from "../components/Date/CurrentDate.jsx";
import Search from "../components/Search/Search.jsx";
import Location from "../components/Location/Location.jsx";
import DetailInfo from "../components/DetailInfo/DetailInfo.jsx";

const mainPage = () => {
  return (
    <div>
      <DetailInfo />
      <Search />
      <CurrentDate />
      <Location />
    </div>
  );
};

export default mainPage;
