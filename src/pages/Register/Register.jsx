import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import { Toaster, toast } from 'react-hot-toast';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import imgRegister from "../../../src/assets/images/register4.jpg";
import logoRegister from "../../../src/assets/images/register.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photoURL");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('Password must have one Lowercase letter');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must have one Uppercase letter');
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: `${name}`,
          photoURL: `${photo}`,
        })
          .then(() => {
            Swal.fire({
              position: window.innerWidth <= 768 ? "top" : "top",
              width: "auto", 
              padding: "1rem", 
              showCloseButton: false,
              showCancelButton: false,
              text: "Register Successfully",
              icon: "success",
              timer: 3000 
            });
            // navigate
            navigate(location?.state ? location.state : "/login");
          })
          .catch((error) => {
            console.error(error.message);
          });
        logOut();
      })
      .catch((error) => {
        
        toast.error(error.message);
      });
  };



  return (
    <div
      data-aos="flip-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      style={{
        backgroundImage:
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgRegister})`,
        backgroundSize: "100% 100%",

        backgroundPosition: "center",
        width: "99vw",
        height: "100vh",
      }}
      className="min-h-screen px-4 bg-gray-600 rounded-xl flex flex-col items-center justify-center py-12 mt-6 md:mt-0  sm:px-6 lg:px-8 mb-24 md:mb-0"
    >
      <Helmet>
        <link
          rel="shortcut icon"
          href={logoRegister}
          type="image/x-icon"
        />
        <title>HomeHaven || Register</title>
      </Helmet>

      <div
        className="w-full max-w-md p-8 space-y-3 rounded-xl 
       bg-gray-300 text-black"
      >
        <h1 className="text-2xl font-bold text-center animate__animated animate__backInUp">
          Register Now
        </h1>
        <form
          onSubmit={handleRegister}
          className="space-y-6 animate__animated animate__fadeInBottomRight"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block font-semibold text-black">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block font-semibold text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="photoURL"
              className="block font-semibold text-black"
            >
              PhotoURL
            </label>
            <input
              type="url"
              name="photoURL"
              id="name"
              placeholder="Your photoURL Link"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label
              htmlFor="password"
              className="block font-semibold text-black"
            >
              Password
            </label>
         
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
                <span
                  className="absolute bottom-3 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoIosEyeOff className="text-2xl text-white " />
                  ) : (
                    <IoIosEye className="text-2xl text-white"></IoIosEye>
                  )}{" "}
                </span>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-blue-400 font-semibold">
            REGISTER NOW
          </button>
        </form>

        <p className=" text-center animate__animated animate__fadeInBottomLeft  sm:px-6 text-black">
          You already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="underline pl-1 text-blue-600 font-semibold"
          >
            Login now
          </Link>
        </p>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
