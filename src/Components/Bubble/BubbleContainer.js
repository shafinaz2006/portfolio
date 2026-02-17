import React from "react";
import Bubble from ".";
import './style.css';

const BubbleContainer = () => {
  const bubbleCount = 20;

  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    const size = Math.random() * 80 + 20 + "px"; // 20px–120px
    const left = Math.random() * 100 + "%";
    const duration = Math.random() * 10 + 5 + "s"; // 5–15s
    const delay = Math.random() * 5 + "s";
    const wiggle = Math.random() * 50 + 20 + "px";
    const getRandomHexColor = () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    };

    return (
      <Bubble
        key={i}
        size={size}
        left={left}
        duration={duration}
        delay={delay}
        wiggle={wiggle}
        border={getRandomHexColor()}
      />
    );
  });

  return <div className="bubble-container">{bubbles}</div>;
};

export default BubbleContainer;