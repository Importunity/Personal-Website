import React from 'react';
import { motion } from "framer-motion";

function Home(){
    return(
        <div className="home">
            <div className="container">
                <div className="home-content default-text">
                    <motion.h1 drag style={{color:"white"}} dragConstraints={{top: -100, bottom: 500, left: -400, right: 700}}>Hi!</motion.h1>
                    <motion.h1 drag style={{color:"white"}} dragConstraints={{top: -150, bottom: 400, left: -400, right: 700}}>I'm Amadeus</motion.h1>
                    <motion.h1 drag style={{color:"white"}} dragConstraints={{top: -200, bottom: 500, left: -400, right: 700}}>I enjoy building things.</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default Home;