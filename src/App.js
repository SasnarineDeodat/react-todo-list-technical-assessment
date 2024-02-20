import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Todo from "./components/Todo";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/todo", element: <Todo /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
