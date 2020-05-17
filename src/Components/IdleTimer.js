import React, { useRef } from "react";
import IdleTime from "react-idle-timer";
const idle = () => {
  console.log("User idle");
};
function IdleTimer() {
  const ref = useRef(null);
  return (
    <div>
      <IdleTime ref={ref} timeout={5 * 1000} onIdle={idle}></IdleTime>
    </div>
  );
}

export default IdleTimer;
