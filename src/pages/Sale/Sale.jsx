import  { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import logoSale from "../../../src/assets/images/sale.png";

const Sale = () => {

    const [saleProperties, setSaleProperties] = useState([]);

    useEffect(() => {
      fetch('/card.json')
        .then(response => response.json())
        .then(data => {
          const saleData = data.filter(property => property.status === 'sale');
          setSaleProperties(saleData);
        })
       
    }, []);

  

    return (
        <div className='container mx-auto mt-12 md:mt-20 px-3 md:px-0'>

<Helmet>
<link rel="icon" type="image/svg+xml" href={logoSale} />
<title>HomeHaven || Sale</title>
</Helmet>
<div data-aos="zoom-in" data-aos-duration="1300" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{
        
        saleProperties.map((card,idx) => 


<div key={idx} className="card hover:scale-105 hover:delay-180  border rounded-3xl p-6 glass">
<h2 data-aos="fade-up"
  data-aos-anchor-placement="bottom-center" className="card-title  text-[#23BE0A] text-center flex justify-center items-center pb-4">{card.estate_title}</h2>
<figure className="relative " data-aos="zoom-in-down" data-aos-duration="2200" >
 <img src={card.image} alt="Coming soon.." className="rounded-xl" />
<span className="absolute rounded-br-lg bg-orange-600 text-white font-semibold text-lg px-4 bottom-0 right-0">{card.status}</span>

</figure>
<div className="card-body">
<h2 className="card-title pt-4 font-bold"><i>#{card.segment_name}</i></h2>


<div className="mt-3 leading-10 ">
<span className="text-xl font-semibold">Facilities :</span>
{card.facilities.map((Facilities, idx) => (
         <p
           key={idx}
           className="text-[#23BE0A] text-base font-medium mb-2 bg-[#23be0a0d] py-2 px-4 rounded-[30px]"
         >
           {Facilities}
         </p>
       ))}

</div>

<div className="flex items-center justify-between text-lg font-semibold gap-4 mt-2">
<p>{card.location}</p>
<i>{card.price}</i>
 </div>

 <div className="flex items-center justify-between text-lg font-semibold gap-8 mb-6 mt-3">
<i>Area : {card.area}</i>
 </div>
<Link to={`/details/${card.id}`} className="animate__animated animate__bounceInLeft animate__delay-1s">
<button className="btn w-full bg-[#23BE0A] border-0btn-primary text-white font-bold text-lg">{card.view_property_button}</button>
   </Link>
</div>
</div>
   
     )
        
        }


</div>


<div>


</div>

     </div>
 );
};
export default Sale;