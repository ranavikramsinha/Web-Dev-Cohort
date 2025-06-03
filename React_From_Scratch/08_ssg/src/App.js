import React from "react";

export default function App({ games }) {
  return React.createElement(
    "div",
    { style: { padding: "10px" } },
    React.createElement("h1", null, "AAA Games"),
    React.createElement(
      "ul",
      null,
      games.map((game) =>
        React.createElement("li", { key: game.id },
          React.createElement("h3", null, game.name),
          React.createElement("p", null, game.description),
        )
      )
    )
  );
}
