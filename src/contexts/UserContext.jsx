import { createContext, useState, useEffect } from "react";
import { fetchAllUsers } from "../Utils/Api";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  users: [],
  setUsers: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const initUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(storedUser);
      }
    };

    const fetchUsers = async () => {
      try {
        const userData = await fetchAllUsers();
        setUsers(userData);
      } catch (error) {
        console.log("Error fetching users: ", error);
      }
    };
    initUser();
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
