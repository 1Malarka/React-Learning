import { useState, useEffect } from "react";

function Rendering() {
  const [count, setCount] = useState(0);
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];


  useEffect(() => {
    console.log("Starting timer.");
    const interval = setInterval(() => setCount(c => c + 1), 2000);

    return () => {
      console.log("Clearing timer.");
      clearInterval(interval);
    };
  }, []);

  

  
  return ( 
  <>
    <h1>Time: {count}</h1>; 
    <ul>
      {users.map(user => (
        <p key={user.id}>{user.name}, {user.id}</p>
      ))}
    </ul>
 </>
  )
  
  
}

export default Rendering