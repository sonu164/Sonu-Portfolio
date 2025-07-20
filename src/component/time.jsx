import React, { useState, useEffect } from "react";

let Currenttime = () => {
  // let time = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      That is Current Date & Time of India : {time.toLocaleDateString()}{" "}
      {time.toLocaleTimeString()}
    </div>
  );
};
export default Currenttime;
