import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";

const UseAuth = () => {
    const allContextData = useContext(AuthContext)
    return allContextData
};

export default UseAuth;