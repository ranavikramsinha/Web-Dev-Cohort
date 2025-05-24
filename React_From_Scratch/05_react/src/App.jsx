import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => {
        console.log("Fetch status:", res.status, res.statusText);
        return res.json();
      })
      .then((data) => {
        console.log("Parsed JSON:", data);
        setMessage(data.Message ?? data.message ?? "no message field");
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setMessage("Failed to load");
      });
  }, []);

  return (
    <div>
      <h1>Games List of 2025</h1>
      <p>This is a list of games that released orwill be released in 2025</p>
      <h2>{message}</h2>
    </div>
  );
}
