import { logo } from "../../assets";

const Header = () => (
    <section >
    
        <div className="bg-[#D0B35F] px-[10%] py-10 text-[000] h-[130px]">
        <div className ="flex align-center justify-between">
           <div className="bg-[#D0B35F] p-3 rounded-full">
                <img src={logo} alt="" className="h-[120px] w-[120px] shadow-2xl rounded-full shadow-cyan-500/50"/>
           </div>
               <div className="w-[40%]">
                <ul className="flex justify-between text-[20px] font-semibold ">
                    <li className="cursor-pointer hover:text-white active:text-white"><a href="/">Home</a></li>
                    <li className="cursor-pointer hover:text-white active:text-white"> <a href="#register">Register</a></li>
                    <li><a href="#category">Category</a></li>
                    <li><a href="#msg">About ZEP</a></li>
                </ul>
               </div>
            </div>
        </div>
            
           
           
    </section>
  
   
  );
  
  export default Header;