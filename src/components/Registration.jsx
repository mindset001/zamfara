import { star } from "../assets";

const Registration = () => (
    <section className="bg-[#372F2D] px-[10%] py-10 text-white">
        
            
            <div className ="flex align-center justify-center">
            {/* <div></div> */}
                <div className="flex p-5">
                <img src={star} alt="" />
                <p className="text-uppercase text-red text-[52px] font-san px-2">HOW TO REGISTER</p>
                <img src={star} alt="" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-5">
                <ul className="text-left list-disc text-[28px] text-ubuntu w-[80%] leading-10">
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