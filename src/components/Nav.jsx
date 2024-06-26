import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/login" className={"px-4 py-2"}>
        login
      </NavLink>
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