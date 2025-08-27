import { useState, useEffect, useRef} from "react";

function Rendering() {
  const [count, setCount] = useState(0);
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);


  useEffect(() => {
    console.log("Starting timer.");
    const interval = setInterval(() => setCount(c => c + 1), 2000);

    return () => {
      console.log("Clearing timer.");
      clearInterval(interval);
    };
  }, []);

  
 function handleMouseMove(e) {
    setPos({ x: e.clientX, y: e.clientY });
 }

 const handleClick = () => {
  divRef.current.textContent = "Hello from useRef!";
  divRef.current.focus();
 }

  return ( 
  <>
    <h1>Time: {count}</h1>; 
    <ul>
      {users.map(user => (
        <p key={user.id}>{user.name}, {user.id}</p>
      ))}
    </ul>
    <div style={{ height: "200px", border: "1px solid black" }}
         onMouseMove={handleMouseMove}>
      <p>Mouse position: {pos.x}, {pos.y}</p>
    </div>
    <div>
      <div ref={divRef}>
       Something in div...
      </div>
       <button onClick={handleClick}>Change and focus</button>
    </div>
 </>
  )
  
  
}

export default Rendering