import React from "react";
import { motion } from "framer-motion";
import {AppWrap} from '../../wrapper'
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInview: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__heaader-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Yasir</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"><strong>A Self Taught Developer</strong></p>
            <p className="p-text"><strong>Freelancer</strong></p>
            <p className="p-text"><strong> Open Source Contributor</strong></p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__heaader-img"
      >
        <img src={images.profile} alt=""/>
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        /> */}
      </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInview}
          className="app__header-circles"
        >
          {[images.redux, images.javascript, images.react].map(
            (circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="circle" />
              </div>
            )
          )}
        </motion.div>
      
    </div>
  );
};

export default AppWrap(Header,"home");
