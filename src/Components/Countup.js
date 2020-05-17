import React from "react";
import Count, { useCountUp } from "react-countup";
function Countup() {
  const { start, pauseResume, reset, update, countUp } = useCountUp({
    duration: 5,
    end: 1000,
    startOnMount: false,
  });
  return (
    <div>
      <div>
        <h2>{countUp}</h2>
        <button onClick={start}>start</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => update(2000)}>update</button>
        <button onClick={pauseResume}>pauseResume</button>
      </div>
      <h1>
        <Count end={1000} />
        <br />
        <Count end={1000} duration={5} />
        <br />
        <Count end={100} duration={5} start={500} />
        <br />
        <Count end={100} duration={5} prefix="$" decimals={2} />
        <br />
        <Count end={100} duration={5} decimals={2} suffix="INR" />
      </h1>
    </div>
  );
}

export default Countup;
