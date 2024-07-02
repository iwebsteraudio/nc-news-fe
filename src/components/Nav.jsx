import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../contexts/UserContext";

const NavLinks = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Hey {user}</span>
          <button onClick={handleLogout} className="px-4 py-2">
            Logout
          </button>
        </div>
      ) : (
        <NavLink to="/login" className={"px-4 py-2"}>
          login
        </NavLink>
      )}
      <NavLink to="/cooking" className={"px-4 py-2"}>
        Cooking
      </NavLink>
      <NavLink to="/politics" className={"px-4 py-2"}>
        Politics
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-1/3">
      <div className="hidden md:flex justify-between border-b border-gray-500 p-2">
        <NavLinks />
      </div>

      <div className="md:hidden p-2">
        <button onClick={toggleNavBar} className="focus:outline-none">
          {isOpen ? <X /> : <Menu />}
        </button>
        {isOpen && (
          <div className="flex flex-col border-t border-gray-500 p-2">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
