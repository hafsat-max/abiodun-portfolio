import "./about.css";
import portfolioBg3 from "../../assets/portfolioBg3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </motion.div>

      <div className="container about-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="about-me">
            <div className="about-me-image">
              <img src={portfolioBg3} alt="about me image" />
            </div>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 15 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="about-cards">
              <article className="about-card">
                <FaAward className="about-icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about-card">
                <VscFolderLibrary className="about-icon" />
                <h5>Projects</h5>
                <small>5 Completed </small>
              </article>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 15 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p style={{ textAlign: "justify" }}>
              I am a Frontend Developer with experience in ReactJS, and
              proficiency in JavaScript/TypeScript. I am dept at crafting robust
              and visually appealing user interfaces, demonstrated expertise in
              delivering high-quality solutions and optimizing development
              processes. Proven track record of consistently exceeding project
              expectations through technical expertise and a results-driven
              approach.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 15 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
