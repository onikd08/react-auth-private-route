import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gray-900 min-h-[calc(100vh-68px)]">
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
