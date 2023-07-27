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
        <p className=" px-[6%]">Rooted in the community, trading with heart and soul! As a local market trader, I embrace the essence of tradition and connection, offering handpicked treasures that reflect our culture and heritage. Join me on this enriching journey, where every transaction supports local artisans and keeps our community thriving.</p>
       </div> 
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={entr2} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Serving nature's sweetness, one fruit at a time! I bring the freshest produce to your plate, nurturing health and delight with every sale. Join me on this fruitful path, where the colors and flavors of nature unite, and happiness blooms like a ripe harvest.</p>
       </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className="" >
       <img src={entr3} alt="" className=" h-[276px] pl-[14%] md:pl-[20%]"/>
        <p className=" px-[6%]">Aspiring to be the best barber, I craft hairstyles that reflect individuality and boost confidence. Join me on this grooming voyage where every cut is a work of art, and every client leaves with a smile.</p>
       </div>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
           
    </section>
  
   
  );
  
  export default Entrepreneur;