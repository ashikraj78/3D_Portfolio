import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'


const ServiceCard=({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index , 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p 
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
    At heart, I'm a coder who has an intense love for design. The last 3 years of my life have been a deep dive into the world of coding, where I've taken vibrant ideas and brought them to life on the digital canvas. My foundations might be in spatial design, but today, my enthusiasm truly lies with the MERN stack. When I dive into code, I see more than just algorithms and logic; I see it as a symphony where every line, every command, has a purpose.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  
  </>
  )
}

const AboutWrap = SectionWrapper(About, "about") 

export default  AboutWrap;