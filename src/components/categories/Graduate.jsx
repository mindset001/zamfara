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
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div> 
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={grad2} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={grad3} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
           
    </section>
  
   
  );
  
  export default Graduate;