import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";



const Root = () => {
  return (
<div>

<div className="font-poppins">
        <div className="navbar">
        <Navbar></Navbar>

        </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>

</div>
  );
};

export default Root;
