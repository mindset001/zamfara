import { logo, email, phone } from "../assets";

const Footer =()=> (

<section className="bg-[#D0B35F] px-[10%] py-10 h-auto md:h-[200px]">
    <div className="flex flex-col md:flex-row justify-between">
    <img src={logo} alt="" className="h-[131px] w-[131px]"/>
    <div >
        <div className="items-right flex justify-end">
            <p tel="08160071243" className="text-[20px] font-normal">0805558095</p>
            <img src={phone} alt="" className="pl-3"/>
        </div>
        <div className="flex pt-3">
            <p mailto="smademola01@gmail.com" className="text-[20px] font-normal">support@zamfara.gov.ng</p>
            <img src={email} alt="" className="pl-3"/>
        </div>
    </div>
    </div>
</section>
);

export default Footer

