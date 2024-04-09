import "./contact.scss"
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

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
    const formRef=useRef();
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_nmak307', 'template_xqj2zar', formRef.current, {
            publicKey: 'CJuwoCcqByEuL6TZV',
          })
          .then(
            () => {
              setSuccess(true);
            },
            (error) => {
             setError(true);
            },
          );
      };

    return (
        <div className="contact">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Lets work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Email</h2>
                    <span>mwaichatha8@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone Number</h2>
                    <span>+265881102070</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Location</h2>
                    <span>Blantyre, Malawi</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form
                ref={formRef}
                onSubmit={sendEmail}
                >  
                    <input type="text" required placeholder="Name" name="from_name" />
                    <input type="email" required placeholder="Email" name="to_name"/>
                    <textarea rows={8} placeholder="Write message here" name="message" />
                    <button>Submit</button>
                    {error&&"Error"}
                    {success&&"Success"}
                </form>
            </div>
        </div>
    )
}

export default Contact