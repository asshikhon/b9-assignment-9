import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
const error = useRouteError();

    return (
        <div>
            
            <p>{error.statusText || error.message}</p>

            {
error.status === 404 && <div className="flex flex-col items-center mt-24 lg:mt-72 justify-center space-y-6">
<h1 className="text-center text-5xl md:text-7xl font-semibold lg:text-[150px] text-red-600">404</h1>

    <h3 className="text-4xl lg:text-7xl font-bold">Page Not Found</h3>
  
   <Link to="/"> <button className="btn text-xl font-bold border border-red-600 rounded-lg text-red-600 py-2 px-4 ">Back Home</button></Link>
</div>

            }
        </div>
    );
};

export default ErrorPage;