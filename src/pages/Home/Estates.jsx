import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css'


const Estates = () => {

const [cards, setCards] = useState([])

useEffect(() => {
fetch('/card.json')
.then(res => res.json())
.then(data => setCards(data))

},[])


    return (
        <div >
           <div data-aos="flip-right" data-aos-duration="1000" > <h2 className="text-2xl text-center lg:text-5xl font-bold mb-5">Estates</h2>
           
           <p className="w-3/4 text-lg font-medium text-center mx-auto mb-7">Premier residential community offering single-family homes, townhouses, apartments, student housing, senior living communities, vacation rentals, and more. Experience suburban living at its finest.</p>
           </div>

<div data-aos="zoom-in" data-aos-duration="1300" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{
           
           cards.map((card,idx) => 
   


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

    <div className="flex items-center justify-between text-lg font-semibold gap-8 mb-6 mt-4">
<i>Area : {card.area}</i>
    </div>
  <Link to={`/details/${card.id}`} className="  animate__animated animate__bounceInLeft animate__delay-1s">
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

export default Estates;