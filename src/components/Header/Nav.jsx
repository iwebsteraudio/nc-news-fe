import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="menu-link">
          Home
        </Link>
      </li>
      {/* <Link to="/post">Post</Link> */}
      <li>
        <Link to="/LogIn" className="menu-link">
          Log In
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
