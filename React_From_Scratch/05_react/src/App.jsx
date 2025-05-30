import { useState, useEffect } from "react";
import { GameList } from "./AAA_Games.jsx";
import { useFavouriteGames } from "./hooks/usefavouriteGames.js";
import ContactForm from "./ContactForm.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

export function App() {
  const { list, loading, error } = useFavouriteGames();
  const [message, setMessage] = useState("Loading...");
  // const [message, setMessage] = useState(6);

  useEffect(() => {
    fetch("/api")
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

  // setMessage(prev => prev + 5);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Games List</h1>
      <ErrorBoundary>
        <GameList />
      </ErrorBoundary>

      <section>
        <h2>Favourite AAA Games</h2>
        <ErrorBoundary>
          <ul>
            {list.map((game) => (
              <li key={game.id}>{game.title}</li>
            ))}
          </ul>
        </ErrorBoundary>
      </section>

      <ErrorBoundary>
        <ContactForm />
      </ErrorBoundary>
    </div>
  );
}
