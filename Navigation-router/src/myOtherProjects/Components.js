export const createTodo = (set, get) => ({
     todos: [],
     filter: "All",
     setFilter: (f) => set({filter: f}),  // filter (omg)
     
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
}))})

export const createCounter = (set) => ({
     count: 0,
     increase: () => set((state) => ({ count: state.count + 1 })),
     decrease: () => set((state) => ({ count: state.count - 1 })),
     reset: () => set(() => ({ count: 0 })),
})