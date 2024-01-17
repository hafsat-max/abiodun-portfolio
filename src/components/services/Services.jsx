import './services.css';
import { BiCheck } from 'react-icons/bi';
import { motion } from 'framer-motion';


const Services = () => {
  return (
    <section id='services'>
      
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
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </motion.div>

      <div className="container services-container">

        {/* UI/UX CONTAINER */}
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <article className='service'>
            <div className="service-head">
              <h3>Frontend Development</h3>
            </div>

            <ul className='service-list'>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Collaboration with designers.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Responsive web design</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Optimization of website performance.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Component-based architecture in frameworks like react.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Version control systems like Git to collaborate and manage code.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Proficiency in debugging code, and identifying and fixing issues.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Effective communication, problem-solving, teamwork, and time management.</p>
              </li>
            </ul>
          </article>
        </motion.div>

        {/* WEB DEV CONTAINER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2,  duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <article className='service web'>
            <div className="service-head">
              <h3>Office Software Skills</h3>
            </div>

            <ul className='service-list'>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Word Processing</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Spreadsheets</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Presentations</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Data Entry and Management</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Document Collaboration</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Basic Graphic Design</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Proofreading and Editing</p>
              </li>

            </ul>
          </article>
        </motion.div>


        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4,  duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <article className='service'>
            <div className="service-head">
              <h3>Content Creation</h3>
            </div>

            <ul className='service-list'>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
        </motion.div> */}

      </div>
    </section>
  );
}

export default Services;
