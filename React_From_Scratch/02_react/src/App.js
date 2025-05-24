import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Games = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "AAA Games"),
    React.createElement("p", {}, "GOY ", "DS2 ", "Expedition 33 "),
  ]);
};

const App = () => {
  return React.createElement("div", { class: "test" }, [
    React.createElement("h1", {}, "Games list of 2025"),
    React.createElement(Games),
    React.createElement(Games),
    React.createElement(Games),
    React.createElement(Games),
    React.createElement(Games),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

//*NOTE :- react ka browser ke ander extension is react dom
