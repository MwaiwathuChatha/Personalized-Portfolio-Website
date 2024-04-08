import "./contact.scss"
import { motion } from "framer-motion"

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};


const Contact = () => {
    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Lets work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Email</h2>
                    <span>hello@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone Number</h2>
                    <span>+265 ....</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Location</h2>
                    <span>Linthipe, Dedza</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form>
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="Write message here" />
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact