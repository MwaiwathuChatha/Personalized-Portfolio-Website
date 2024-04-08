import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"


const items = [
    {
        id: 1,
        title: "Online JavaScript Image Classifier",
        img: "/java.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        title: "Cake Website",
        img: "/cafe.jpg",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
        id: 3,
        title: "CSV Data Visualisation Website",
        img: "/lamp.jpg",
        description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
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
            <div className="container" >
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