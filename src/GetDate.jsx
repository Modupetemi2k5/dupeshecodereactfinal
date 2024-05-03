import React from "react";

export default function GetDate(props) {
  let days = ["Sun", "Mon", " Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let minute = props.date.getMinutes();
  let hour = props.date.getHours();
  if (minute < 0) {
    return (minute = `0 ${minute}`);
  }

  return (
    <div>
      {day}:{hour}:{minute}
    </div>
  );
}
