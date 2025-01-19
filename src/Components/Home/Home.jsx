import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Home = () => {
    const user = useContext(AuthContext);
    console.log(user)
    return (
        <div>
         <h2>this is home</h2>
        </div>
    );
};

export default Home;