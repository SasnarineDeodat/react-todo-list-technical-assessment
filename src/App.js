import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Todo from "./components/Todo";

// Creating a router object with routes defined for our application
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }, // Route for the homepage
  { path: "/todo", element: <Todo /> }, // Route for the Todo list page
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
