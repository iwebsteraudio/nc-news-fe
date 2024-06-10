import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";

const LogIn = ({ userData }) => {

    console.log(userData)
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    event.preventDefault();

    setUser(username);

    console.log("user logged in:", username);
  };
  
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <UserContext>
      {{ userData } && (
        <form className="login-form" onSubmit={handleLogin}>
          <input
            name="username"
            placeholder="enter your username"
            type="text"
            value={username}
            onChange={(event) => setUser(event.target.value)}
          ></input>
          <input
            name="password"
            placeholder="enter your password"
            type="text"
            value={password}
            onChange={(even = setPassword(event.target.value))}
          ></input>
          <button type="submit">Log In</button>
        </form>
      )}
    </UserContext>
  );
};

export default LogIn;
