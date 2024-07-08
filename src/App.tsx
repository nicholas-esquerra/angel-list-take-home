import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [thing, setThing] = useState({ key1: "nothing for now" });
  const fetchThing = () => {
    console.log("fetching...");
    fetch(
      "https://qrqmz2axalbq3umkbyhtbymllq0aorpp.lambda-url.us-east-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          key1: "value1",
          key2: "value2",
          key3: "value3",
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setThing(res);
      });
  };

  useEffect(() => {
    fetchThing();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {thing ? <div>thing is: {thing.key1}</div> : <div>nothing</div>}
    </>
  );
}

export default App;
