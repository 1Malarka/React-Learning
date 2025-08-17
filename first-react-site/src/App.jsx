import { useEffect, useState } from "react";

function Image() {
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="A women"></img>
    
  );
}

function App() {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    const element = document.createElement("div");
    const elementtwo = document.createElement("h3")
    element.textContent = "Hey, I'm a div!";
    element.className = "Container";
    elementtwo.textContent = "I know that looks weird, buut, i actually understand something about how jsx works, and that html-familiar syntax"
    rootElement.appendChild(element);
    rootElement.appendChild(elementtwo);
  }, []);

  const [count, setCount] = useState(() => {
  const saved = localStorage.getItem("savedCount");
  return saved !== null ? Number(saved) : 0;
});

  

  const saveCount = () => {
    localStorage.setItem("savedCount", count)
  }

  const resetCount = () => {
    setCount(0);
    localStorage.removeItem("savedCount");
  }

  return (
    <div>
      <h1>My first component in React!</h1>
      <p>Hello, world!</p>
      <button onClick={() => setCount(count + 1)} >There are even a counter {count}</button>
      <button onClick={saveCount}>Save count</button>
      <button onClick={resetCount}>Reset count</button>
      <Image />
      <Image />
    </div>
  );
}

export default App;
