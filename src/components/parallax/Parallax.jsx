import { useRef } from "react"
import "./parallax.scss"
import {motion, useScroll,useTransform} from "framer-motion"





// eslint-disable-next-line react/prop-types
const Parallax = ({type}) => {
    const ref =useRef();

const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"] 
})

const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"])

  return (
    <div className="parallax" 
    ref={ref}
    style={{
        background:
        type==="services"
        ? "linear-gradient(180deg,#5e63b6,#27296d)"
        : "linear-gradient(180deg,#9896f1,#edb1f1)"
        }}> 
        <motion.h1 style={{y:yBg}}>{type==="services"
        ?"Our Services"
        :"Our Tech Stack"}
        </motion.h1>
        <motion.div className="mountains">

        </motion.div>
        <motion.div className="planets">

        </motion.div>
        <motion.div className="stars">

        </motion.div>
    </div>
  )
}

export default Parallax;