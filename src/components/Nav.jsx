import { useContext, useState, useEffect } from "react";
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
          <span className="text-gray-700"><NavLink to={`/users/${user}`}>Hey {user} </NavLink></span>
          <button onClick={handleLogout} className="px-4 py-2">
            logout
          </button>
        </div>
      ) : (
        <NavLink to="/login" className={"px-4 py-2"}>
          login
        </NavLink>
      )}
      {
        <>
        <NavLink to="/articles/topic/cooking" className={"px-4 py-2"}>
          cooking
        </NavLink>
        <NavLink to="/articles/topic/coding" className={"px-4 py-2"}>
        coding
      </NavLink>
      <NavLink to="/articles/topic/football" className={"px-4 py-2"}>
          football
        </NavLink>
        
      </>
      }
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
