import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div>
      <h1>React Hooks App using useState and useEffect</h1>
      <Counter />
      <DataFetching />
    </div>
  );
}

export default App;
