import { star } from "../assets";

const Application = () => (
    <section className="bg-[#FFF6DD] px-10 py-10">
        
            
            <div className ="flex align-center justify-center">
            {/* <div></div> */}
                <div className="flex p-5">
                <img src={star} alt="" />
                <p className="text-uppercase text-red text-[52px] font-san px-2">WHO CAN APPLY?</p>
                <img src={star} alt="" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-5">
                <ul className="text-left list-disc text-[28px] text-ubuntu w-[80%] leading-10">
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