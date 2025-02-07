import { Link } from "react-router-dom";
import Button from "./components/button";

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-green-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">GreenLink</h1>
          <div className="flex gap-6">
            {/* <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/services" className="hover:text-green-200">Services</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
            <Link to="/container-dashboard" className="hover:text-green-200">Dashboard</Link> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center text-center p-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to GreenLink</h2>
          <p className="text-gray-600 mb-6">
            Your smart solution for container tracking and logistics. 
            Manage your containers efficiently with real-time monitoring and insights.
          </p>
          <Link to="/container-dashboard">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-md">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
