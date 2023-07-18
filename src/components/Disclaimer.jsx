import { claim } from "../assets";

const Disclaimer = () => (
    <section className="bg-[#fff]  px-2 md:px-[10%] py-10 text-[000]">
        
            
        <div className ="flex align-center justify-center">
            {/* <div></div> */}
            <div className="flex p-5 w-auto">
                <img src={claim} alt="" className=" w-[45px] h-[45px] md:w-[88px] md:h-[88px]"/>
                <p className="text-uppercase text-red w-auto text-[20px] md:text-[52px] font-san md:px-3 px-1 font-semibold">DISCLAIMER</p>
                <img src={claim} alt="" className=" w-[45px] h-[45px] md:w-[88px] md:h-[88px]" />
                </div>
                {/* <div>b</div> */}
            </div>
            <div className=" px-8 pt-2 text-left ">
                <p className="pb-5 text-[14px] md:text-[28px] font-normal">This portal will be a data collection tool and not in any way a platform for recruitment or employment.</p>
                <p className="pb-5 text-[14px] md:text-[28px] font-normal">  Rather, a means for the government to have direct access to those in need of assistance and upliftment in the state in readiness for when the government or other non-governmental agencies in collaboration with the government intends to initiate or rollout any such empowerment schemes specific to a particular demographic.</p>
                <p className="pb-5 text-[14px] md:text-[28px] font-normal">lt is accessible to graduates, non-graduates, skilled and unskilled individuals to sign up.</p>
            </div>
    </section>
  
   
  );
  
  export default Disclaimer;