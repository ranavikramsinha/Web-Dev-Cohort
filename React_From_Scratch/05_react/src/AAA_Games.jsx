import { useState, useEffect } from "react";

export function GameList() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/games")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        console.log("Fetch status:", res.status, res.statusText);
        return res.json();
      })
      .then((data) => {
        console.log("Parsed JSON:", data);
        setList(data.games);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>AAA Games List</h2>
      <ul>
        {list.map((games) => (
          <li key={games.id}>{games.title}</li>
        ))}
      </ul>
    </div>
  );
}
