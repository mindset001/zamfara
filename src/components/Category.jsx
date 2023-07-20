// import { star } from "../assets";
import Vocational from "./categories/Vocational"
import Entrepreneur from "./categories/Entrepreneur";
import Graduate from "./categories/Graduate";


const Category = () => (
    <section className="flex flex-col w-[100%] md:justify-between md:flex-row ">
        
            
            <div className =" bg-[#D0B35F] w-full md:w-[33.2%] items-center flex-row justify-center">
                <p className=" text-[24px] font-bold mt-5 mb-5">VOCATIONAL SKILLS</p>
                <Vocational/>
                    <button className="text-black bg-white rounded-[10px] w-[172px] h-[49px] text-[20px] font-semibold mt-5 mb-[10%]">Register</button>
            </div>
            <div className =" align-center justify-center bg-[#FFF6DD] w-full md:w-[33.5%]">
            <p className=" text-[24px] font-bold mt-5 mb-5">GRADUATE</p>
                <Graduate/>
                    <button className="text-white bg-[#D0B35F] rounded-[10px] w-[172px] h-[49px] text-[20px] font-semibold mt-5 mb-[10%]">Register</button>
            </div>
            <div className =" align-center justify-center bg-[#D0B35F] w-full md:w-[33.3%]">
            <p className=" text-[24px] font-bold mt-5 mb-5">ENTREPRENEURSHIP</p>
                <Entrepreneur/>
                    <button className="text-black bg-white rounded-[10px] w-[172px] h-[49px] text-[20px] font-semibold mt-5 mb-[10%]">Register</button>
            </div>
    </section>
  
   
  );
  
  export default Category;