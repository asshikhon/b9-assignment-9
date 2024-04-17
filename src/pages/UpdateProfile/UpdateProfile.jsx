import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";
import logoUpdate from "../../../src/assets/images/update.png";


const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, setUser, loading } = useContext(AuthContext);
  const auth = getAuth();
  const defaultName = user.displayName;
  const DefaultPhotoURL = user.photoURL;


  if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = user.email;
    const uid = user.uid;

    

   
    const currentUser = auth.currentUser;

    updateProfile(currentUser, { 
      displayName: `${name}`,
      photoURL: `${photoURL}`,
    })
      .then(() => {
        setUser({
          displayName: `${name}`,
          photoURL: `${photoURL}`,
          email: `${email}`,
          uid: `${uid}`,
        });
        
        navigate("/user");
        Swal.fire({
          position: window.innerWidth <= 768 ? "top" : "top",
          width: "auto", 
          padding: "1rem", 
          showCloseButton: false,
          showCancelButton: false,
          text: "Update Successfully",
          icon: "success",
          timer: 3000 
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-white to-green-200 h-screen flex justify-center items-center">
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href={logoUpdate}
        />
        <title>HomeHaven || Update Profile</title>
      </Helmet>

      <div
        className="w-full max-w-md p-8 space-y-3 rounded-xl 
        bg-gradient-to-r from-green-200 to-white text-black animate__animated animate__zoomInDown"
      >
        <h1
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="text-2xl font-bold text-center "
        >
          Edit Profile
        </h1>

        <form
          onSubmit={handleUpdateProfile}
          className="space-y-6 animate__animated animate__rollIn "
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
              defaultValue={defaultName}
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
              defaultValue={DefaultPhotoURL}
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-white bg-blue-400 font-semibold"
          >
            Update
          </button>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateProfile;
