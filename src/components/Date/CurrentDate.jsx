import React, { useEffect, useState } from "react";
import { Container, DateDiv, TimeDiv } from "./CurrentDate";
const CurrentDate = () => {
  const todayTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "오후" : "오전";

    // 12시간 형식으로 변경
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시인 경우 12로 표시

    return `${ampm} ${hours} : ${minutes < 10 ? "0" + minutes : minutes}`;
  };

  const [currentTime, setCurrentTime] = useState(todayTime());
  const todayDate = () => {
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

    return `${dayOfWeek}, ${todayDate}th ${formattedMonth} ${todayYear}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(todayTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container>
      <DateDiv>{todayDate()}</DateDiv>
      <TimeDiv>{currentTime}</TimeDiv>
    </Container>
  );
};

export default CurrentDate;
