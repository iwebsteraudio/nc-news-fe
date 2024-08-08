import { fetchUserByUsername } from "../Utils/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const { username } = useParams();

  useEffect(() => {
    fetchUserByUsername(username)
      .then((userData) => {
        setUserData(userData);
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  }, []);

  return (
    <div className="border-b border-gray-500 flex flex-col justify-between items-center px-8 my-8">
      <p>{username}'s Profile</p>
      <p>
        Name: {userData.name}
        <img src={userData.avatar_url} className="m-8 max-w-md" />
      </p>
    </div>
  );
};

export default UserProfile;
