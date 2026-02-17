import './style.css';

const Bubble = ({ size, left, duration, delay, border, wiggle }) => {
  return (
    <div
      className="bubble"
      style={{
        width: size,
        height: size,
        left: left,
        animationDuration: duration,
        animationDelay: delay,
        border:`1px solid ${border}`,
        "--wiggle": wiggle,
      }}
    />
  );
};

export default Bubble;