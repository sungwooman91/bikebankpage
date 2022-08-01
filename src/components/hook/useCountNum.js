import { useEffect, useState } from "react";

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function useCountNum(number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      const progress = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round(number * progress));
      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [number, frameRate, start, totalFrame]);

  return count;
}
