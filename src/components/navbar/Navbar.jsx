import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar" style={{background:'#27296d'}}>
            {/* Side Bar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:0.5}}
                >
                    Mwai&apos;s Portfolio Website</motion.span>
                <div className="social">
                    <a href="#"><img src="/instagram.png" alt=""/></a>
                    <a href="#"><img src="/facebook.png" alt=""/></a>
                    <a href="#"><img src="/youtube.png" alt=""/></a>
                    
                </div>
            </div>

        </div>
    )
}

export default Navbar