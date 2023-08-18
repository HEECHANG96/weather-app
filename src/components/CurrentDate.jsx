import React from "react";

const CurrentDate = () => {
  const todayTime = () => {
    // 현재 날짜 및 시간
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let formattedMonth = todayMonth < 10 ? "0" + todayMonth : todayMonth;
    let todayDate = now.getDate();

    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();

    return `${dayOfWeek}, ${todayDate}th ${formattedMonth} ${todayYear}`;
  };
  return (
    <div>
      {todayTime().slice(0, 9)}
      <span>{todayTime().slice(9, 12)}</span>
      <span>{todayTime().slice(12, 20)}</span>
    </div>
  );
};

export default CurrentDate;
