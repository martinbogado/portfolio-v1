import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
};

function getAnimationSettings(angle, originX) {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    origin: { x: originX }
  };
}

const Confetti = ({ confirmation }) => {
  const [intervalId, setIntervalId] = useState();

  const refAnimationInstance = useRef(null);
  const ConfettiBtn = useRef();

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 16));
    }
  }, [nextTickAnimation, intervalId]);

  useEffect(() => {

    if(confirmation && ConfettiBtn.current){
      ConfettiBtn.current.click();

      timeout(2000)
        .then(() => {
          ConfettiBtn.current = null
        });
    }    

    timeout(2000)
      .then(() => {
        clearInterval(intervalId);
        setIntervalId(null);
      });
    
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId, confirmation]);

  return (
    <>
       <button ref={ConfettiBtn} onClick={startAnimation} style={{ display: "none" }} />
     
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}

export default Confetti;
