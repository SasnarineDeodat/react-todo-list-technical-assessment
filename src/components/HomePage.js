import { Link } from "react-router-dom"; // Link component for navigation

// Functional component for the Homepage
const HomePage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl md:text-6xl font-bold text-green-500">
        Welcome to the Todo App
      </h1>
      <p className="text-center text-xl md:text-2xl text-green-500 mt-4">
        Technical Interview
        <br />
        <Link to="/todo">
          {/* Link to navigate to Todo page */}
          <button className="bg-green-500 text-black font-semibold px-8 py-2 rounded hover:bg-green-800 transition-colors duration-200 mt-4">
            Go to To-Do List →
          </button>
        </Link>
      </p>
    </div>
  );
};
export default HomePage;
