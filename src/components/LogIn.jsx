import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";

const LogIn = () => {
  const { user, setUser, users } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      setUser(username);

      localStorage.setItem("user", username);

      console.log("user logged in:", username);
    } else {
      alert("Please enter a username and password");
    }
  };

  if (user) {
    console.log(user);
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <p className="text-2xl">List of users: </p>

      <ul>
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>

      <form
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-8"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`btn btn-blue w-full text-white py-2 rounded-md ${
            password ? "bg-blue-500 text-white hover:bg-blue-600 transition duration-300" : "bg-gray-400 hover:bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!password}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
