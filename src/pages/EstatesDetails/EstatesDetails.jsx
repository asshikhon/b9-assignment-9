import logoDetails from "../../../src/assets/images/details.png"
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css'

const EstatesDetails = () => {
const cards = useLoaderData();
const { id } = useParams();
const idInt = parseInt(id);
const card = cards.find((card) => card.id === idInt);

    return (
<div className="flex flex-col container mx-auto p-6 space-y-6 overflow-hidden rounded-lg lg:mt-6">
<Helmet>
<link rel="icon" type="image/svg+xml" href={logoDetails} />
<title>Estate Details : {id}</title>

</Helmet>

<img src={card.image} alt="" className="rounded-3xl animate__animated animate__bounceInUp hover:scale-105 hover:delay-130 w-[110vh] mb-4 max-h-[600px]" />




	<div >

	<i className="card-title lg:text-3xl animate__animated animate__bounceInRight text-[#23BE0A] items-center pb-4">#{card.estate_title}</i>

    <div className="mt-3 animate__animated animate__bounceInUp leading-10 ">
<span className="text-xl font-semibold">Facilities :</span>
{card.facilities.map((Facilities, idx) => (
            <p
              key={idx}
              className="text-[#bdaa56] text-base font-medium mb-2 bg-[#23be0a0d] py-2 px-4 rounded-[30px]"
            >
              {Facilities}
            </p>
          ))}

    <div className="flex items-center animate__animated animate__bounceInRight justify-between text-xl font-semibold gap-8 mb-3 mt-4">
<i>Area : {card.area}</i>
    </div>

<h2 className="text-xl animate__animated animate__bounceIn my-5 font-semibold">Status : <span className="bg-orange-600 ml-5 text-white px-6 py-2 rounded-xl">{card.status}</span></h2>

</div>

<div className="flex animate__animated animate__fadeInBottomRight items-center justify-between text-lg lg:text-2xl font-semibold gap-4 my-6">
<i>Location : {card.location}</i>
<i className="text-red-600">{card.price}</i>
    </div>



		<p className="text-base animate__animated animate__backInDown text-gray-600 font-medium">{card.description}</p>
	


	</div>
</div>
    );
};

export default EstatesDetails;