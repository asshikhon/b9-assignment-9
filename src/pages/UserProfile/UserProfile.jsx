import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoUser from "../../../src/assets/images/user.png";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>;
  }

  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;
  const emailVerified = user?.emailVerified;
  const uid = user?.uid;

  
  return (
    <div className="flex items-center justify-center md:min-h-[80vh]  bg-gradient-to-r from-green-100 to-purple-200 shadow-lg my-12 rounded-3xl">

<Helmet>
  <link
    rel="icon"
    type="image/svg+xml"
    href={logoUser}
  />
  <title>HomeHaven || User Profile</title>
</Helmet>

        <div 
 className="card  w-[320px] md:w-[549px] bg-gradient-to-r from-purple-300  to-white text-gray-800 shadow-lg my-12 mx-auto rounded-xl">
            <div>
                <div className="text-xl justify-end flex items-center text-black gap-2 pr-2 pt-2">
                    Edit Profile{" "}
                    <Link to="/update" className="flex justify-end">
    <FaUserEdit className="text-3xl  text-green-500" />{" "}
  </Link>
                </div>
            </div>
            <figure data-aos="flip-up" data-aos-duration="1500" className="mt-6 flex justify-center ">
                <img
                    src={photoURL}
                    alt="userImg"
                    className="w-[200px] h-[200px] rounded-full"
                />
            </figure>
            <div className="card-body text-black md:ml-0">
                <h2 className="text-3xl text-center pt-5 text-black">
                    User Information
                </h2>
                <h2 className="card-title text-xl mt-6">
                    Name: {displayName}
                </h2>
                <p className="font-medium "><span className="text-xl ">Uid : </span> {uid}</p>
                <p className="font-medium">
                    <span className="text-xl ">Email Address : </span> {email}
                </p>
                <p className="font-medium animate__animated animate__fadeInBottomLeft break-words">
                <span className="text-xl ">Photo URL : </span> {photoURL}
                </p>
                <div className="card-actions justify-end mt-3">
                    <div className="badge animate__animated animate__fadeInBottomLeft bg-purple-500 py-4 rounded-md px-4 text-white text-lg font-semibold">
                        {emailVerified ? (
                            <p className="font-semibold">
                                Verified User
                            </p>
                        ) : (
                            <p className="font-semibold">
                                Non-Verified User
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}



export default UserProfile;
