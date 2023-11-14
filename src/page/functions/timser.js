import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
    const timerRef = useRef();
  
    const [count, setCount] = useState({
      min: 5,
      sec: 0
    });
  
    const handleCount = () => {
      if (count.min !== 0 || count.sec !== 0) {
        setCount((prevCount) => {
          if (prevCount.sec === 0) {
            return {
              min: prevCount.min - 1,
              sec: 59
            };
          } else {
            return {
              min: prevCount.min,
              sec: prevCount.sec - 1
            };
          }
        });
      } else {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  
    const handleRestart = () => {
      if (!timerRef.current) {
        timerRef.current = setInterval(handleCount, 1000);
      }
    };
  
    const handleStop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  
    const timePlus = () => {
      setCount((prevCount) => ({
        min: prevCount.min + 1,
        sec: prevCount.sec
      }));
    };
  
    useEffect(() => {
      timerRef.current = setInterval(handleCount, 1000);
      return () => {
        clearInterval(timerRef.current);
      };
    }, []);
  
    return {
      count,
      handleRestart,
      handleStop,
      timePlus,
    };
  };