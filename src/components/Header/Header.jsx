import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import BurgerMenu from "./BurgerMenu";
import Hamburger from "hamburger-react";

const Header = ({ isMobile }) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <Link to="/" className="banner-link">
        NC-News
      </Link>
      {isMobile ? <Hamburger toggled={isOpen} toggle={setOpen} /> : <Nav />}
      <BurgerMenu isOpen={isOpen}/>
    </>
  );
};

export default Header;
