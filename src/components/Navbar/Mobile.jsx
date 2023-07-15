import { useState } from "react";
import { logo } from "../../assets";

export default function Mobile() {
    const [isShown, setIsShown] = useState(false);
  
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
 
    };
  
    return (
      <div>
             <div className="bg-[#D0B35F] p-3 flex justify-between items-center">
                <img src={logo} alt="" className="h-[80px] w-[80px] shadow-2xl rounded-full shadow-cyan-500/50"/>
                <div onClick={handleClick}>
                    <div className="bg-white w-[20px] h-[1px] mb-1"></div>
                    <div className="bg-white w-[20px] h-[1px] mb-1"></div>
                    <div className="bg-white w-[20px] h-[1px]"></div>
                </div>
           </div>
        {isShown && <Box />}
      </div>
    );
  }
  
  function Box() {
    return (
        <div className="w-full bg-[#D0B35F] p-6 fixed text-white">
        <ul className="flex flex-col text-right text-[20px] font-semibold ">
            <li className="cursor-pointer hover:text-white active:text-white">Home</li>
            <li>Register</li>
            <li>Category</li>
            <li>About ZEP99</li>
        </ul>
       </div>
    );
  }