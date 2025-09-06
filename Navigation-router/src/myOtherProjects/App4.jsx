import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
       (set) => ({
     count: 0,
     increase: () => set((state) => ({ count: state.count + 1 })),
     decrease: () => set((state) => ({ count: state.count - 1 })),
     reset: () => set(() => ({ count: 0 })),
    //  todos below
    todos: [],
    filter: "All",
    setFilter: (f) => set({filter: f}),  // filter (omg)
    theme: "light",   // theme (fr ong???)
    toggleTheme: () =>
      set((state) => ({
      theme: state.theme === "light" ? "dark" : "light"
    })),


    addTodo: (text) => 
      set((state) => ({
        todos: [...state.todos, {id: Date.now(), text, completed: false}]
      })),
    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((t) => t.id !== id)
      })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  }),
  {
      name: "app-storage"
    }
));

function StateManagment() {
 
function Counter() {
  const count = useStore((state) => state.count)
  const increase = useStore((state) => state.increase)
  const decrease = useStore((state) => state.decrease)
  const reset = useStore((state) => state.reset)

  return (
    <div>
      <h2>
        count is {count};
      </h2>
      <button onClick={increase}>
       Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

function TodoList() {
  const todos = useStore((state) => state.todos)
  const addTodo = useStore((state) => state.addTodo)
  const removeTodo = useStore((state) => state.removeTodo)
  const toggleTodo = useStore((state) => state.toggleTodo)
  const [text, setText] = useState();
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)

  const filteredTodos = todos.filter((t) => {
    if (filter === "Undo") return !t.completed;
    if (filter === "Complete") return t.completed;
    return true;
  })

  function AddFilter() {
    if (text.trim() ===  "") {
      return;
    } else {
    addTodo(text); 
    setText("");
    }
  }
  

  return (
    <div>
      <ul>
        {filteredTodos.map((t) => (
          <li key={t.id}>
          <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
           {t.text}
          </span>
          <button onClick={() => toggleTodo(t.id)}>
           {t.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => removeTodo(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={AddFilter} >Add to-do task</button>
      <input type="text" placeholder="Type your task here." onChange={(e) => setText(e.target.value)}  />
      <h3>there's also a filter</h3>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Undo")}>Undo</button>
        <button onClick={() => setFilter("Complete")}>Complete</button>
      </div>
    </div>
  )
}



 return (
<div>
  <div>
    <h1>Welcome!</h1>
    <h2>This is a mini-project with other mini-tasks that operating states by Zustand</h2>
    <Counter />
  </div>
  <div>
    <TodoList />
    <p>Originally i made Theme function for only this page, buuut i though making it for every page (global) would be better</p>
  </div>
</div>
 )

}

export default StateManagment;