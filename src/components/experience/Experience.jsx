import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import { motion } from 'framer-motion';
import { experience, officeSkills } from '../../utils/data';

const Experience = () => {
  return (
    <section id='experience'>
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
        <h5>What Skills I Have</h5>
        <h2 style={{textAlign: 'center'}}>My Skills</h2>
      </motion.div>

      <div className="container experience-container">
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">{
              experience.map(({id,skill,level})=>(<article key={id}className='experience-details'>
                  <BsPatchCheckFill className='experience-detail-icon' />
                  <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>))
            } 
            </div>
          </div>
        {/* </motion.div> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="experience-backend">

            <h3>Office Software Skills</h3>
            <div className="experience-content">
            { officeSkills.map((skill,id)=>( <article key={id} className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
