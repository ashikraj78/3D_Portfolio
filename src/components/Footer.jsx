// import { styles } from "../style";

export default function Footer() {
  return (
    <div className={`mr-8 flex justify-between  text-[#915eff] ` }>
        <div>
            <div className="bg-[#915eff] inline-block opacity-70 p-1 rounded">
                <a
                    href="https://github.com/ashikraj78"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/github2.png" alt="github" className="pr-10 sm:pr-0" />
                </a>
            </div>
            <div></div>
            <div className="bg-[#915eff] inline-block opacity-70 p-1 rounded">
            <a
                href="https://www.linkedin.com/in/ashik-raj-43aa5769/"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/linkedin.png" alt="linkedin" className="pr-2 sm:pr-0" />
            </a>
            </div>
            <div className=" border-l-2 border-[#915eff] h-full w-1 ml-4  opacity-30 "></div>
        </div>

        <div>
            <div className=" inline-block opacity-70 p-1 rounded">
                <a
                    href="mailto:ashikraj.78@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mail"
                >
                    {/* <img src="/mail.png" alt="linkedin" className="pr-2 sm:pr-0" /> */}
                    ashikraj.78@gmail.com
                </a>
            </div>
            <div className=" border-l-2 border-[#915eff] h-24 w-1 ml-3 opacity-30  "></div>
        </div>
       
      
       
        
       
        
      
    </div>
  )
}
