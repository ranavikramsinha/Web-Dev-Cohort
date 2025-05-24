import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Games = (props) => {
  console.log(props);

  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.cost),
  ]);
};

const App = () => {
  return React.createElement("div", { class: "test" }, [
    React.createElement("h1", {}, "Games list of 2025"),
    React.createElement(Games, {
      name: "GOY",
      cost: "4999",
    }),
    React.createElement(Games, {
      name: "DS2",
      cost: "4999",
    }),
    React.createElement(Games, {
      name: "Expedition 33",
      cost: "2999",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

//*NOTE :- react ka browser ke ander extension is react dom
