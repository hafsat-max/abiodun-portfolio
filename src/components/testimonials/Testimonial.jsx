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
    avatar: avatar1,
    name: 'Adebayo Peace',
    review: "Working with Ridwan was an absolute pleasure. He transformed our vision for a hair service landing page into a stunning reality. The attention to detail and the ability to create a responsive and visually appealing user interface is truly commendable. Ridwan not only delivered a beautifully designed landing page but also ensured that it functions flawlessly on all devices. Our clients love the seamless experience they now have when browsing our services and booking appointments. Ridwan has an incredible talent for understanding client needs and translating them into a user-friendly and eye-catching design. We couldn't be happier with the results and highly recommend Ridwan for anyone seeking a skilled and creative frontend developer.",
  },
  {
    avatar: avatar2,
    name: 'Dare Seyi',
    review: "Words cannot express how delighted we are with the system developed by Ridwan. This innovative solution has completely transformed the way we operate our printing shop. No more queues, no more unnecessary waiting, and no more limitations - it's a game-changer!. Ridwan has truly outdone himself by creating a seamless, user-friendly system that enables our customers to send their documents for printing, track their order's status, and schedule convenient pick-up times. This has not only enhanced our efficiency but also significantly improved our customer satisfaction. The beautiful and responsive design of the system showcases Ridwan's exceptional skills as a frontend developer. The dedication to understanding our needs and crafting a solution that perfectly fits our requirements is beyond impressive. We couldn't have asked for a better partner in this endeavor. We highly recommend Ridwan to anyone seeking a professional who can deliver both functionality and aesthetics in one package. Ridwan has set a new standard for excellence",
  },
  {
    avatar: avatar3,
    name: 'Badmus Khadijah',
    review: "It is with great pleasure that I share my experience working with Ridwan and his team on the development of our remarkable Event Vendor Platform. Our mission was to create a platform that would simplify the process of connecting event vendors with potential customers, and Ridwan played a pivotal role in bringing this vision to life. With his expertise as a frontend developer, he helped craft an intuitive and visually appealing user interface that has proven to be pivotal for our business. The responsiveness and functionality of the platform have exceeded our expectations, making it incredibly easy for event vendors to register their businesses and for clients to find and connect with the services they need. It has revolutionized the event planning industry and simplified the process for all parties involved.Ridwan's contribution to this project has been invaluable. He are a true professional, a talented developer, and a pleasure to work with. I would highly recommend Ridwan for anyone seeking to elevate their digital presence and create a user-friendly platform that leaves a lasting impression.",
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
            data.map(({avatar, name, review}, index) => {
              return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client-avatar">
                  <img src='' alt="avatar" />
                </div>

                <h5>{name}</h5>
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
