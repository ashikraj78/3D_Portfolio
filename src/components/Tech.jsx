import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>

    {technologies.map((technology, index)=>(
      <div key={technology.name+index} className="w-28 h-28">
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
    </div>
  )
}

const WrappedTech = SectionWrapper(Tech, "tech") 

export default WrappedTech