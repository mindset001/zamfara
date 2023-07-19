import { star } from "../assets";
import { product1,product2, product3,product4, obj, icon,bullet} from "../assets";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Objective = () => (
    <section className="bg-[#F6F6F6] px-2 md:px-[10%] py-[10%] text-[000]">
        
            
            <div className ="flex flex-col md:flex-row align-center justify-center w-auto">
            {/* <div></div> */}
                <div className="flex p-5 w-auto">
                <img src={star} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]"/>
                <p className="text-uppercase text-red w-auto text-[20px] md:text-[52px] font-san md:px-3 px-1 font-semibold">GOALS AND OBJECTIVES</p>
                <img src={star} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center ">

                {/* carousel */}
                <Swiper
                className="w-[100%]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    //   spaceBetween={50}
      slidesPerView={1}
    //   navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    // pagination={{
    //     clickable: true,
    // }}
    // navigation={true}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={product1} alt="" className=" h-[200px] w-[300px] md:h-[481px] md:w-[797px]"/>
        </SwiperSlide>
      <SwiperSlide>
      <img src={product2} alt="" className=" h-[200px] w-[300px] md:h-[481px] md:w-[797px]"/>
        </SwiperSlide>
      <SwiperSlide>
      <img src={product3} alt="" className=" h-[200px] w-[300px] md:h-[481px] md:w-[797px]"/>
        </SwiperSlide>
        <SwiperSlide>
      <img src={product4} alt="" className=" h-[200px] w-[300px] md:h-[481px] md:w-[797px]"/>
        </SwiperSlide>
    </Swiper>
                {/* end carossel */}
                <div className="flex-row mt-5">
                    <div className="flex items-center justify-center pb-5 pt-5">
                        <img src={icon} alt="" className=" w-[25px] h-[21px] md:w-[58px] md:h-[50px]"/>
                        <h2 className="text-uppercase text-red w-auto text-[20px] md:text-[29px] font-san md:px-3 px-1 font-semibold">GOALS</h2>
                    </div>
                    <p className="font-normal text-[12px] md:text-[24px] w-auto md:w-[519px] text-center">Taking the lead in empowering the people of Zamfara, fostering a prosperous and vibrant community through inclusive opportunities and sustainable development.</p>
                </div>
            </div>


            <div>
            <div className="flex items-center justify-center pb-5 pt-10">
                        <img src={obj} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]"/>
                        <h2 className="text-uppercase text-red w-auto text-[20px] md:text-[29px] font-san md:px-3 px-1 font-semibold">OBJECTIVES</h2>
                    </div>
                    <div className="text-left font-normal text-[12px] md:text-[24px]">
                        <div className="flex pb-5">
                            <img src={bullet} alt="" className="w-[24px] h-[24px] "/>
                            <p className="pl-3">Creating a database where indigenes can be readily pulled from when a scheme relevant to their interest or skillset is initiated.</p>
                        </div>
                        <div className="flex items-center pb-5 ">
                            <img src={bullet} alt="" className="w-[24px] h-[24px]"/>
                            <p className=" pl-3">Connecting people to initiatives that will empower them.</p>
                        </div>
                        <div className="flex">
                            <img src={bullet} alt="" className="w-[24px] h-[24px] "/>
                            <p className="pl-3">Working together with government and non-governmental organizations and agencies to invest in people, build healthy communities and empower them to create wealth and employment resulting in positive and lasting changes in the state.</p>
                        </div>
                    </div>
            </div>
    </section>
  
   
  );
  
  export default Objective;