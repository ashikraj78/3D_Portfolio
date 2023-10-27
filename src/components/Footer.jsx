import { Tilt } from "react-tilt";
import { styles } from "../style";

export default function Footer() {
  return (
    <div className={`mr-8 pb-8 flex justify-between text-[#915eff] sm:${styles.paddingX}` }>
        <div className="flex md:block justify-between w-1/3">
            <Tilt className="w-[50px]" >
                <div className="bg-[#915eff] inline-block opacity-70 p-1 rounded hover:scale-110 hover:opacity-100">
                    <a
                        href="https://github.com/ashikraj78"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/github2.png" alt="github"  />
                    </a>
                </div>
            </Tilt>
           
            <div></div>
            <Tilt className="w-[50px]">
                <div className="bg-[#915eff] inline-block opacity-70 p-1 rounded hover:scale-110 hover:opacity-100">
                    <a
                        href="https://www.linkedin.com/in/ashik-raj-43aa5769/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/linkedin.png" alt="linkedin" />
                    </a>
                </div>
            </Tilt>
           
            <div className="md:block hidden border-l-2 border-[#915eff] h-full w-1 ml-4  opacity-30 "></div>
        </div>

        <div className="">
            <Tilt className="md:w-[50px]" >
            <div className=" opacity-70 p-1 rounded hover:opacity-100">
                <a
                    href="mailto:ashikraj.78@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mail"
                >
                    ashikraj.78@gmail.com
                </a>
            </div>
            </Tilt>
           
            <div className="hidden md:block  border-l-2 border-[#915eff] h-24 w-1 ml-3 opacity-30  "></div>
        </div>
       
      
       
        
       
        
      
    </div>
  )
}
