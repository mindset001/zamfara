import { gov, star } from "../assets";

const Message = () => (
    <section className="bg-[#FFF6DD] px-10 py-10">
        
            
            <div className ="flex align-center justify-center">
            {/* <div></div> */}
                <div className="flex p-5">
                <img src={star} alt="" />
                <p className="text-uppercase text-red text-[52px] font-san px-3">WELCOME MESSAGE</p>
                <img src={star} alt="" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-5">
                <div>
                    <div className="flex justify-between">
                        <div className="">
                            <img src={gov} alt="" className="h-[273px] w-[273px]"/>
                            <div className="text-center">
                                <h2 className="font-bold text-[15px]">H.E Dauda Lawal Dare</h2>
                                <p className="font-normal text-[11px]">Governor, Zamfara State</p>
                            </div>
                        </div>
                            <div className="text-left text-[28px] w-[70%]">
                            <p className="pb-5">It gives me immense pleasure to extend a warm welcome to all of you on this esteemed platform.</p>
                                <p>
                                    

                                        As the governor, one of my primary responsibilities is to prioritize empowerment and wealth creation for the people of our state. In line with this commitment, my administration is deeply concerned about addressing the challenges of unemployment and improving the living conditions of our citizens.
                                </p>
                            </div>
                    </div>

                    <div className="text-left">
                        <p className="text-left text-[28px] pt-5">
                        We firmly believe that engaging our youth in skill development and acquisition programs is a powerful means to achieve these objectives, while also creating sustainable opportunities for the future.
                        </p>
                    </div>

                </div>
            </div>
    </section>
  
  );
  
  export default Message;