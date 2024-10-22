import { useEffect, useState } from "react";
import { TbCircleLetterSFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, onLogout }) {
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 20);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full p-4 z-50 mb-11"
      style={{ backgroundColor: scrolling ? "#f5f5f5" : "" }}
    >
      <div className="flex md:flex-row flex-col justify-between mx-auto max-w-6xl">
        <div className="flex items-center justify-start">
          <TbCircleLetterSFilled className="text-4xl" />
          <span className="md:text-2xl text-xl font-bold">SERENITY YOGA</span>
        </div>
        <div className="flex md:space-x-4 space-x-3 items-center justify-start">
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <Link to="/">
              <button
                className="md:bg-slate-200 p-2 rounded-full hover:bg-gray-300"
                aria-label="Go to Home"
              >
                Home
              </button>
            </Link>
            <Link to="/about">
              <button
                className="md:bg-slate-200 p-2 rounded-full hover:bg-gray-300"
                aria-label="Learn About Us"
              >
                About Us
              </button>
            </Link>
            <Link to="/service">
              <button
                className="md:bg-slate-200 p-2 rounded-full hover:bg-gray-300"
                aria-label="View Our Services"
              >
                Services
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="md:bg-slate-200 p-2 rounded-full hover:bg-gray-300"
                aria-label="Contact Us"
              >
                Contact Us
              </button>
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="md:bg-slate-200 p-2 rounded-full hover:bg-gray-300"
                aria-label="Logout"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button
                  className="md:bg-slate-200 p-2 rounded-full hover:bg-gray-300"
                  aria-label="Login"
                >
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
