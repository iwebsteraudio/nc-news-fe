import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const LogOut = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login")
    }

    return (
        <LogIn onClick={handleLogout}/>
    )
}

export default LogOut;