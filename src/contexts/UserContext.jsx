import { createContext, useState, useEffect } from "react";
import { fetchAllUsers } from "../Utils/Api";

export const UserContext = createContext({
  username: "",
  name: "",
  setUser: () => {},
  users: [],
  setUsers: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
        try {
          const userData = await fetchAllUsers();
          setUsers(userData);
        } catch (error) {
          console.log("Error fetching users: ", error);
        }
      };

      fetchUsers();
    },
    []);

  return (
    <UserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
