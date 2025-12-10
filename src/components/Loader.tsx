import { useEffect, useState } from "react";
import "../styles.css";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 3400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-overlay ${done ? "hide" : ""}`}>
      <div className="ai-loader-zoom">
        AI
        <span className="glance"></span>
      </div>
    </div>
  );
}
