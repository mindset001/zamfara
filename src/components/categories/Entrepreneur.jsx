import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { entr1, entr2, entr3,  } from "../../assets";


const Entrepreneur = () => (
    <section className="">
        
            
            {/* carousel */}
            <Swiper
                // className="w-[100%]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //   spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
    }}
    //   scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
       <div className="" >
       <img src={entr1} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div> 
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={entr2} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={entr3} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
           
    </section>
  
   
  );
  
  export default Entrepreneur;