import Hamburger from "hamburger-react";



const HamburgerIcon = () => {
  const [isOpen, setOpen] = useState(false);

  return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default HamburgerIcon;