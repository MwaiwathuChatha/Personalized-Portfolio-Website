import "./Banner.scss"
import { motion }  from "framer-motion"

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    duration:1,
    staggerChildren:0.1,
  },
  scrollButton:{
      opacity:0,
      y:10,
      transition:{
       duration:1.3,
       repeat:Infinity,
      },
  
  },
};
const sliderVariant={
  initial:{
    x:0,
  },
  animate:{
    x:"-800%",
    transition:{
      repeat:Infinity,
      duration:40,
    },
  },
}; 
const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Mwaiwathu Chatha</motion.h2>
          <motion.h1 variants={textVariants}> Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See projects</motion.button>
            <motion.button variants={textVariants}>Lets connect!</motion.button>
          </motion.div>
          <motion.img animate="scrollButton" variants={textVariants} src="/scroll.png" alt="" />
          
        </motion.div>
        <motion.div variants={sliderVariant} initial="initial" animate="animate" className="slidingText">
        Web Development Electronics UI/UX Design
      </motion.div>
        
        <div className="imageContainer">
          <motion.img  src="/Mwai2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner