import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  return <div>Welcome {authInfo.name}</div>;
};

export default Home;
