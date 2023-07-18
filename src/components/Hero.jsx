// import { hero } from "../assets";

const Hero =()=> (

<section className='bg-[url("https://res.cloudinary.com/mindset/image/upload/v1689335056/Frame_27_uo4gu2.png")] bg-cover bg-center h-auto md:h-[588px] w-[100%] text-white px-[10%] py-[8%]  justify-center flex-row'>
    <div >
        <div className="text-left">
            <div className=" text-[25px] md:text-[80px] w-full font-semibold font-ubuntu pt-[20%] md:pt-0 text-center md:text-left"  style={{
            textTransform: 'uppercase',
            // fontFamily: 'ubuntu'
          }}>Zamfara Youth <br /> Empowerment Scheme</div>

            <p className="text-[18px] md:text-[28px] font-normal w-auto md:w-[605px] py-5 text-center md:text-left">Harnessing skills to create  sustainable opportunities and wealth in the state </p>
            <button className="bg-[#D0B35F] flex text-center justify-center  items-center text-[28px] font-medium rounded-[15px] w-[301px] h-[65px] mt-5 md:mb-5">REGISTER NOW</button>
        </div>
        <div>
            
        </div>
    </div>
</section>
);

export default Hero

