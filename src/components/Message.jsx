import { gov, star } from "../assets";
import { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p >
        {isReadMore ? text.slice(0, 0) : text}
        <button className="text-[#D0B35F] flex text-center justify-center  items-center text-[18px] md:text-[28px] font-normal mt-5"
        onClick={toggleReadMore}>
          {isReadMore ? "Read More" : " Read less"}
        </button>
      </p>
    );
  };

const Message = () => (
    <section className="bg-[#FFF6DD] px-2 md:px-[10%] py-10">
        
            
            <div className ="flex align-center justify-center">
            {/* <div></div> */}
                <div className="flex p-5">
                <img src={star} alt="" />
                <p className="text-uppercase text-red text-[20px] md:text-[52px] font-san px-3">WELCOME MESSAGE</p>
                <img src={star} alt="" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-5">
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="">
                            <img src={gov} alt="" className="h-[273px] w-[273px]"/>
                            <div className="text-center">
                                <h2 className="font-bold text-[15px]">H.E Dauda Lawal Dare</h2>
                                <p className="font-normal text-[11px]">Governor, Zamfara State</p>
                            </div>
                        </div>
                            <div className="text-left text-[18px] md:text-[28px] w-full md:w-[70%] ">
                            <p className="pb-5">It gives me immense pleasure to extend a warm welcome to all of you on this esteemed platform.</p>
                                <p>
                                    

                                        As the governor, one of my primary responsibilities is to prioritize empowerment and wealth creation for the people of our state. In line with this commitment, my administration is deeply concerned about addressing the challenges of unemployment and improving the living conditions of our citizens.
                                </p>
                            </div>
                    </div>

                    <div className="text-left">
                        <p className="text-left text-[18px] md:text-[28px] w-full md:w-[70%]">
                        We firmly believe that engaging our youth in skill development and acquisition programs is a powerful means to achieve these objectives, while also creating sustainable opportunities for the future.
                        </p>

                        <p className="text-left text-[18px] md:text-[22px] w-full md:w-[70%]"> 
                        <ReadMore>

To this end, I am proud to introduce the Zamfara Youth Empowerment Scheme (ZAYES), a user-friendly portal designed to connect individuals across various sectors, including job seekers, artisans, farmers, and entrepreneurs, with prospective opportunities. ZAYES aims to address the pressing issue of unemployment by offering a platform that enhances the state's economy through the following key strategies:
<br /><br />
Skill Enhancement: Recognizing the importance of skills in today's competitive world, ZAYES also focuses on facilitating skill development programs. Through partnerships with industry experts, vocational training institutes, and educational institutions, we aim to equip our youth with the necessary skills and knowledge to excel in their chosen fields.
<br /><br />
Entrepreneurship Support: ZAYES recognizes the potential of entrepreneurship in driving economic growth and job creation. The platform offers aspiring entrepreneurs a comprehensive range of resources, including mentorship programs, access to funding opportunities, and business development support. By nurturing a vibrant entrepreneurial ecosystem, we aim to foster innovation, stimulate business growth, and create sustainable employment opportunities.
<br /><br />
Agricultural Development: Agriculture is a vital sector in our state, and ZAYES places a special emphasis on empowering farmers. Through the platform, farmers gain access to market information, agricultural training, improved farming techniques, and financial support. This holistic approach aims to enhance productivity, increase income, and promote food security in our state.
<br /><br />
In conclusion, the Zamfara Youth Empowerment Scheme (ZAYES) is a significant step towards realizing our vision of a prosperous and empowered state. By leveraging this platform, we are confident that we can effectively tackle the issue of unemployment, enhance the living conditions of our citizens, and create a sustainable and vibrant economy for future generations. Together, let us embark on this transformative journey towards a brighter future.
            
</ReadMore>
                        </p>
                        
                    </div>

                </div>
            </div>
    </section>
  
  );
  
  export default Message;