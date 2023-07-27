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
    //   slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
    }}
    //   scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
       <div className="" >
       <img src={voc1} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Aspiring to be the top-notch mechanic, I diagnose, fix, and breathe life into vehicles with precision and care. Join me on this mechanical voyage where every repair is a testament to my dedication and love for all things automotive.</p>
       </div> 
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={voc2} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Building dreams, one masterpiece at a time!  Aspiring to be the best carpenter, I carve, shape, and craft with unwavering commitment. Come witness the art of woodworking as I elevate structures and aspirations alike.</p>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={voc3} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">From sparks to mastery, I forge my destiny!  Aspiring to be the finest welder, I wield my skills with passion and dedication. Join me on my journey of relentless pursuit for excellence.</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="" >
       <img src={voc4} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Aspiring to be a top broiler farmer, I nurture healthy flocks with dedication and expertise. Join me on this journey of poultry husbandry, where every step is aimed at delivering premium quality, tender meat to tables worldwide.</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="" >
       <img src={voc5} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">I create captivating looks that enhance individuality and empower self-expression. Join me on this artistic odyssey, where every face becomes a canvas of artistry. Aspiring to be the best makeup artist.</p>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="" >
       <img src={voc6} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]"> I nurture healthy flocks with care and dedication. Join me on this farm-to-table adventure, where every cluck is a step towards sustainable poultry farming.</p>
       </div>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
           
    </section>
  
   
  );
  
  export default Vocational;