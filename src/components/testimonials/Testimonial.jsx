import { motion } from 'framer-motion';
import './testimonial.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    name: 'Taofeeq Otu',
    role:'Backend developer',
    review: <><p>Collaborating with Abiodun on recent projects was an enriching experience. I am compelled to express my utmost admiration for her skills and unwavering commitment to success. Hafsoh is not just a talented frontend developer; she is a master in her craft. Her proficiency in translating complex design concepts into elegant, functional user interfaces, coupled with her expertise in seamlessly integrating these interfaces with backend APIs, results in an impressive and harmonious final product.</p> <p>One of Hafsoh&apos;s standout qualities is her mastery of time management. She consistently adheres to the timelines established during our daily standup scrums, showcasing exemplary organizational skills that keep the entire team on track and ensure precise meeting of project milestones.</p><p>Beyond her technical prowess, Hafsoh is an absolute joy to work with. Her positive attitude and infectious enthusiasm make every collaboration not only highly productive but also thoroughly enjoyable. Ultimately, I&apos;ll definitely recommend Hafsoh for her expertise, unwavering commitment to project success, and her ability to foster a collaborative and enjoyable work environment. It has been a pleasure to witness her contributions elevate our project, and I am confident that she will continue to make significant impacts in any endeavor she undertakes.</p></>,
  },
  {    name: 'Adebusola Adeyeye',
    role:'Backend Developer',
    review: "Hafsah is a great team player. She is not just a good frontend developer, her attention to details and her keen to make a system work as it should work is top-notch",
  },
 
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
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
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>
      </motion.div>

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
        <Swiper className="container testimonial-container"

        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          
          {
            data.map(({avatar, name, review,role}, index) => {
              return (
              <SwiperSlide key={index} className="testimonial">
               

                <h5  style={{color:'white'}}>{name},</h5>
                <h5 style={{color:'white'}}>{role}</h5>
                <small className='client-review'>{review}</small>
              </SwiperSlide>
              )
            })
          }

        </Swiper>
      </motion.div>
    </section>
  );
}

export default Testimonial;
