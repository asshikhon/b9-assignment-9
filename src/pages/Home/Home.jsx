import logoHome from "../../../src/assets/images/home.png"
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estates from "./Estates";


const Home = () => {
    return (

        <div className="container mx-auto px-4 md:px-0">

<Helmet>
<link rel="icon" type="image/svg+xml" href={logoHome} />
<title>HomeHaven || Home</title>
</Helmet>

            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;