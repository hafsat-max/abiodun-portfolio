import { motion } from 'framer-motion';
import { project } from '../../utils/data';
import './portfolio.css';


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </motion.div>

        <motion.div
          className="container portfolio-container"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {
            project.map(({imageSrc,id, title, github,hostedLink, description}) => {
              return (
                  <motion.div key={id}>
                    <article className="portfolio-item">
                      <div className="portfolio-item-image">
                        <img src={imageSrc} alt="blog-project" />
                      </div>
                      <h3>{title}</h3>
                      <p style={{height: '7rem'}}>{description}</p>
                      <div className="portfolio-item-cta">
                        <a href={github} className='btn'>Github</a>
                        <a href={hostedLink} className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
                      </div>
                    </article>
                </motion.div>
              )
            })
          }
        </motion.div>

    </section>
  );
}

export default Portfolio;
