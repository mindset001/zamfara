import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { grad1, grad2, grad3,  } from "../../assets";


const Graduate = () => (
    <section className="">
        
            
            {/* carousel */}
            <Swiper
                // className="w-[100%]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //   spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2700,
        disableOnInteraction: true,
    }}
    //   scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
       <div className="" >
       <img src={grad1} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Boundless curiosity, relentless pursuit of wisdom!  As a graduate student, I immerse myself in the realm of knowledge, fueled by a passion for discovery. Join me on this transformative journey.</p>
       </div> 
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={grad2} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Embracing knowledge, chasing horizons!  As a graduate student, I delve into the depths of academia with curiosity and determination. Join me on this enlightening voyage, where I unlock new insights and contribute to the world of research and innovation.</p>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={grad3} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">As a graduate student, I embrace the thrill of discovery and the joy of learning. Join me on this academic expedition as I delve deeper into my field, aiming for excellence and making a difference along the way.</p>
       </div>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
           
    </section>
  
   
  );
  
  export default Graduate;