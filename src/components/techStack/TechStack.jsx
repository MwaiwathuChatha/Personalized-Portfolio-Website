import "./techstack.scss"
import { motion } from "framer-motion"

const TechStack = () => {
  return (
    <>
      <div className="techstack">

        <motion.div className="listContainer">

          <motion.div className="box" whileHover={{ scale: 1.5 }}>
            <h1 className="head">MERN Stack</h1>
            <img src="/mern.png" alt="" />
          </motion.div>


          <motion.div className="box" whileHover={{ scale: 1.5 }}>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;Javascript</h1>
            <img src="/javascriptHtmlCss.png" alt="" />
          </motion.div>

          <motion.div className="box2">
            <motion.div className="box" whileHover={{ scale: 1.5 }}>
              <h1>React Native</h1>
              <img src="/reactnative.png" alt="" />
            </motion.div>
          </motion.div>


        </motion.div>
      </div>

    </>



  )
}

export default TechStack