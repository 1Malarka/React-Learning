import { useState, useEffect, useRef, createContext, useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const inputRef = useRef();
  const ThemeContext = createContext("light");
  

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  function Child() {
    const theme = useContext(ThemeContext);
    return <h1>Theme: {theme}</h1>;
  }   

  

  return (
    <>
      <div>
       <h1>Count: {count}</h1>
       <button onClick={() => setCount(count + 1)}>Increase</button>
       <button onClick={() => setCount(count - 1)}>Decrease</button>
       <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <h1>
        Timer: {seconds}
      </h1>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <ThemeContext.Provider value="dark">
      <Child />
     </ThemeContext.Provider>
    </>
  )
}

export default App
