import banner1 from "../../../src/assets/images/banner4.jpg"
import banner2 from "../../../src/assets/images/banner3.jpg"
import banner3 from "../../../src/assets/images/banner1.jpg"
import banner4 from "../../../src/assets/images/banner2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import 'animate.css';



const Banner = () => {



    return (
<div className='mb-6 md:mb-10 lg:mb-16'>

<Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={
        {delay:2500}

        }

        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            
        <div className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl " style={{backgroundImage: `url(${banner1})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-5 animate__animated animate__backInDown text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">Your Gateway to Exceptional <br /> Residential Living</h1>
      <p className="mb-5 font-medium animate__animated animate__bounceInLeft">Find your perfect home with HomeHaven – where quality meets comfort. Explore a diverse range of residential options tailored <br /> to your needs and experience exceptional living at its finest.</p>
      <button className="btn animate__animated animate__flash bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide >
            
        <div  className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl" style={{backgroundImage: `url(${banner2})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
  <div>
      <h1  className="mb-5 animate__animated animate__backInDown  text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">Your Gateway to Exceptional <br /> Residential Living</h1>
      <p className="mb-5 font-medium animate__animated animate__bounceInLeft">Find your perfect home with HomeHaven – where quality meets comfort. Explore a diverse range of residential options tailored <br /> to your needs and experience exceptional living at its finest.</p>
      <button className="btn animate__animated animate__flash bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
            
        <div className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl" style={{backgroundImage: `url(${banner3})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
  <div>
      <h1 className="mb-5 animate__animated animate__backInDown text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">Your Gateway to Exceptional <br /> Residential Living</h1>
      <p className="mb-5 font-medium animate__animated animate__bounceInLeft">Find your perfect home with HomeHaven – where quality meets comfort. Explore a diverse range of residential options tailored <br /> to your needs and experience exceptional living at its finest.</p>
      <button className="btn animate__animated animate__flash bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
            
        <div className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl" style={{backgroundImage: `url(${banner4})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
  <div>
      <h1 className="mb-5 animate__animated animate__backInDown text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px] lg:leading-[76px]">Your Gateway to Exceptional <br /> Residential Living</h1>
      <p className="mb-5 font-medium animate__animated animate__bounceInLeft">Find your perfect home with HomeHaven – where quality meets comfort. Explore a diverse range of residential options tailored <br /> to your needs and experience exceptional living at its finest.</p>
      <button className="btn animate__animated animate__flash bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>

      </Swiper>



</div>



    );
};

export default Banner;