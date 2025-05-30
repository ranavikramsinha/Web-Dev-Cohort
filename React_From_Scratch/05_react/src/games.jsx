import { useState } from "react";

export function Games() {
  const [title, setTitle] = useState("DS2");

  const gameList = () => {
    setTitle((prev) => (prev = "GOY"));
  };

  return (
    <div>
      <h2>AAA Games</h2>
      <p>List of AAA Games: {title}</p> //* {} here is variable
      <button onclick={gameList}>Buy</button> //* {} here is function
    </div>
  );
}
