import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-500 p-8">
      <nav className="mb-4 flex gap-4">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/about" className="text-blue-600">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}