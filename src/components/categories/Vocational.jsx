import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { voc1, voc2, voc3, voc4, voc5, voc6 } from "../../assets";


const Vocational = () => (
    <section className="">
        
            
            {/* carousel */}
            <Swiper
                // className="w-[100%]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //   spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
    }}
    //   scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
       <div className="" >
       <img src={voc1} alt="" className=" h-[276px] pl-[20%]"/>
        <p className=" px-[6%]">I aspire to take my mechanic skills to a whole new level</p>
       </div> 
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={voc2} alt="" className=" h-[276px] pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={voc3} alt="" className=" h-[276px] pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="" >
       <img src={voc4} alt="" className=" h-[276px] pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="" >
       <img src={voc5} alt="" className=" h-[276px] pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="" >
       <img src={voc6} alt="" className=" h-[276px] pl-[20%]"/>
        <p className=" px-[6%]">Do you have a means of trade and are passionate to let the government know about your business?</p>
       </div>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
           
    </section>
  
   
  );
  
  export default Vocational;