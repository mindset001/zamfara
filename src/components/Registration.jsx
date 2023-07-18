import { star } from "../assets";

const Registration = () => (
    <section className="bg-[#372F2D] px-2 md:px-[10%] py-10 text-white">
        
            
            <div className ="flex align-center justify-center">
            {/* <div></div> */}
            <div className="flex p-5 w-auto">
                <img src={star} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]"/>
                <p className="text-uppercase text-red w-auto text-[20px] md:text-[52px] font-san md:px-3 px-1 font-semibold">HOW TO REGISTER</p>
                <img src={star} alt="" className=" w-[25px] h-[25px] md:w-[58px] md:h-[58px]" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-5">
                <ul className="text-left list-disc text-[14px] md:text-[28px] text-ubuntu w-auto md:w-[80%] leading-10">
                <li>
                    Visit the official Zamfara empowerment portal www.zep.zamfara.gov.ng
                    </li>
                    <li>
                    Scroll to the menu bar click on SIGNUP 
                    </li>
                    <li>
                    Enter correctly your email address and full name to create an account and follow subsequent instructions
                    </li>
                    <li>
                    Go back to the website www.zep.zamfara.gov.ng
                    </li>
                    <li>
                    Scroll to the menu bar and click on Category 
                    </li>
                    <li>
                    Select the category of interest and click REGISTER 
                    </li>
                    <li>
                    Fill in  the required details correctly
                    </li>
                    <li>
                    Upon successful registration, you will receive an email notification of successful registration
                    </li>
                    
                </ul>
            </div>
    </section>
  
   
   
  );
  
  export default Registration;