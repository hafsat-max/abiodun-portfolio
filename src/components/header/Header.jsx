import './header.css'
import CTA from './CTA';
import portfolioBg2 from '../../assets/portfolioBg2.jpg';
import HeaderSocials from './HeaderSocials';
import { motion } from "framer-motion";


const Header = () => {
  return (
    <header>
        <div className="container header-container">

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
          <h5>Hello I'm</h5>
          <h1>Abiodun Busari</h1>
          <h5 className="text-light"> Frontend Developer </h5>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
          }}
        >
          <CTA />  
        </motion.div>
        
        <HeaderSocials /> 

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="me">
            <img src={portfolioBg2} alt="" />
          </div>
        </motion.div>
          
        <a href="#contact" className='scroll-down' >Scroll Down </a>

        </div>
    </header>
  );
}

export default Header;
