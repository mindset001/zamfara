// import { logo } from "../assets";
import Desktop from "./Navbar/Desktop"
import Mobile from "./Navbar/Mobile"

const Header = () => (
    <section >
            <div className="hidden md:block">
                <Desktop />
                </div>   
                <div className="block md:hidden">
                <Mobile/>
                </div>  
    </section>
  
   
  );
  
  export default Header;