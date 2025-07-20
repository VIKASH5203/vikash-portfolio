import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SectionWrapper.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionWrapper = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="section-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;
