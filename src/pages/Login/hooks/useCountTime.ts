import { useState, useEffect, useRef } from 'react';

const useCountTime = (duration: number) => {
  const [countTime, setCountTime] = useState(0);
  const [isSetup, toggleSetup] = useState(false);
  // 使用useRef钩子创建一个指向NodeJS.Timeout对象的引用
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (isSetup) {
      setCountTime(duration);
      timer.current = setInterval(() => {
        setCountTime((current) => current - 1);
      }, 1000);
    } else clearInterval(timer.current as NodeJS.Timeout);
  }, [isSetup]);

  useEffect(() => {
    if (countTime === 0) {
      toggleSetup(false);
    }
  }, [countTime]);

  function setupCountTime() {
    toggleSetup(true);
  }
  return { countTime, setupCountTime };
};

export default useCountTime;
