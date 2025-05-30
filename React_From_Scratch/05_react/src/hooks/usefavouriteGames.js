import { useState, useEffect } from "react";

export function useFavouriteGames() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/favourite-games")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch games");
        }

        console.log("Fetch status:", res.status, res.statusText);
        return res.json();
      })
      .then((data) => {
        setList(data.games);
        console.log("Parsed JSON:", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message || "Something is wrong");
        setLoading(false);
      });
  }, []);

  return { list, loading, error };
}
