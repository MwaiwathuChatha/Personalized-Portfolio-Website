import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"


const items = [
    {
        id: 1,
        title: "Online Image Classifier",
        img: "/dashboard.jpg",
        description: "Our unique approach aims to combine technical expertise with a deep understanding of business dynamics, ensuring that our solutions are not only technically robust but also aligned with our clients' strategic objectives and goals",
    },
    {
        id: 2,
        title: "Cake Website",
        img: "/electronics.jpg",
        description: "Our unique approach aims to combine technical expertise with a deep understanding of business dynamics, ensuring that our solutions are not only technically robust but also aligned with our clients' strategic objectives and goals",
    },
    {
        id: 3,
        title: "Manufacturing",
        img: "/lamp.jpg",
        description: "Our unique approach aims to combine technical expertise with a deep understanding of business dynamics, ensuring that our solutions are not only technically robust but also aligned with our clients' strategic objectives and goals",
    }
];

// eslint-disable-next-line react/prop-types
const Single = ({ item }) => {
    const ref = useRef;

    const { scrollYProgress } = useScroll({
        target: ref,
       // offset:["start start","end start"]
    });


    const y = useTransform(scrollYProgress, [0, 1], [100,100])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                    <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer"  >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    ) 
}

const Portfolio = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 30,
    })

    return (
        <div className="portfolio" >
            <div className="progress">
                <h1>Featured works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;