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
        <h5 className='my-0'>My Recent Work</h5>
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
                    <article className="portfolio-item flex flex-col gap-3">
                      <div className="portfolio-item-image">
                        <img src={imageSrc} alt="blog-project" />
                      </div>
                      <div className='flex flex-col gap-4 flex-1'>
                      <h3 className='font-extrabold'>{title}</h3>
                      <p >  {description}</p>
                      </div>

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
