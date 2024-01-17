import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/hafsah-busari" target='_blank' rel="noreferrer"> <BsLinkedin /> </a>
      <a href="hafsat-max@github.com" target='_blank' rel="noreferrer"> <FaGithub /> </a>
      <a href="#" target='_blank'> <FiDribbble /> </a>
    </div>
  );
}

export default HeaderSocials;
