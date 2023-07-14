import { logo } from "../assets";

const Footer =()=> (

<section className="bg-[#D0B35F] p-10 h-[200px]">
    <div className="flex justify-between">
    <img src={logo} alt="" className="h-[91px] w-[91px]"/>
    <div >
        <div className="text-left">
            <a tel="08160071243">0805558095</a>
            <img src="" alt="" />
        </div>
        <div>
            <a mailto="smademola01@gmail.com">support@zamfara.gov.ng</a>
            <img src="" alt="" />
        </div>
    </div>
    </div>
</section>
);

export default Footer

