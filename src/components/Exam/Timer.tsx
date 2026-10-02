import { useEffect, useState } from "react";

interface TimerProps {
  initialMinutes: number;
  onTimeUp?: () => void;
}

export default function Timer({ initialMinutes, onTimeUp }: TimerProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialMinutes * 60);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      onTimeUp?.();
      return;
    }

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsRemaining, onTimeUp]);

  const hours = Math.floor(secondsRemaining / 3600);

  const minutes = Math.floor((secondsRemaining % 3600) / 60);

  const seconds = secondsRemaining % 60;

  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "10px",
        backgroundColor: secondsRemaining < 300 ? "#dc2626" : "#2563eb",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      ⏱ Time Remaining: {String(hours).padStart(2, "0")}:
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
