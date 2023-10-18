import {BrowserRouter} from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
function App() {

  return (
    <BrowserRouter>
    <div className="reltive z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
   
  )
}

export default App
