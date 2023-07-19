import { star } from "../assets";

const Application = () => (
    <section className="bg-[#FFF6DD] px-2 md:px-[10%] py-[5%]">
        
            
            <div className ="flex align-center justify-center">
            {/* <div></div> */}
            <div className="flex p-5 w-auto">
                <img src={star} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]"/>
                <p className="text-uppercase text-red w-auto text-[20px] md:text-[52px] font-san md:px-3 px-1 font-semibold">WHO CAN APPLY</p>
                <img src={star} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]" />
                </div>  
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-5">
                <ul className="text-left list-disc text-[14px] md:text-[28px] text-ubuntu w-auto md:w-[80%] leading-10">
                <li>
                    Indigenes of Zamfara state.
                    </li>
                    <li>
                    Demonstrate capacity for development. 
                    </li>
                    <li>
                    Have an evidenced commitment to delivering positive change in the state.
                    </li>
                    <li>
                    The empowerment scheme is targeted at unemployed indigenes of ages 18-45 years old; skilled, unskilled, graduates and non-graduates.
                    </li>
                    <li>
                    Willingness to learn and be trained. 
                    </li>
                    <li>
                    Commitment to creating positive change in Zamfara state. 
                    </li>
                    <li>
                    Passion for self-improvement and growth
                    </li>
                </ul>
            </div>
    </section>
  
  );
  
  export default Application;