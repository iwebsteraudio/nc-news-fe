import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../contexts/UserContext";
import { fetchAllTopics } from "../Utils/Api";

const NavLinks = () => {
  const { user, setUser } = useContext(UserContext);
  const [topics, setTopics] = useState([])

  useEffect(()=>{
    fetchAllTopics()
    .then((topicData)=>{
      setTopics(topicData)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const formattedTopics = topics.map((topic)=>{
    const topicSplit = topic.slug.split("-").map((word)=>{
      return `${word[0].toUpperCase()}${word.slice(1,word.length)}`
    })
    return {...topic, nav: topicSplit.join(" ")}
  })

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      {user ? (
        <div className="flex items-center space-x-4 px-4">
          
            <NavLink to={`/users/${user}`}>{user} </NavLink>
          
          <button onClick={handleLogout} className="px-4">
            Logout
          </button>
        </div>
      ) : (
        <NavLink to="/login" className="px-4 font-semibold">
          Login
        </NavLink>
      )}
      {
        <>
          <NavLink to="/" className={"px-4"}>All</NavLink>
          {formattedTopics.map((topic)=>{
            return (
              <NavLink key={topic.slug} to={`/${topic.slug}/articles`} className={"px-4"}>{topic.nav}</NavLink>
            )
          })}
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
      <div className="hidden md:flex justify-evenly p-2">
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
