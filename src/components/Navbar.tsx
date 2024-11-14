import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          SupabaseCMS
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/auth" className="nav-link">
            Sign In
          </Link>
          <Link to="/auth?mode=signup" className="btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;