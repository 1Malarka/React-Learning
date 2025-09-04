import { createBrowserRouter, RouterProvider, Outlet, Link  } from "react-router-dom";

import App0 from "./myOtherProjects/App0";
import App1 from "./myOtherProjects/App1";
import App2 from "./myOtherProjects/App2";
import App3 from "./myOtherProjects/App3";

function Layout() {
  return (
    <div>
      <header>
        <h2>Super App</h2>
        <div className="Links"> 
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/App0">App1</Link> |{" "}
          <Link to="/App1">App2</Link> |{" "}
          <Link to="/App2">App3</Link> |{" "}
          <Link to="/App3">App4</Link>
        </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
      </footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <h3>Welcome!</h3> },
      { path: "/App0", element: <App0 /> },
      { path: "/App1", element: <App1 /> },
      { path: "/App2", element: <App2 /> },
      { path: "/App3", element: <App3 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
