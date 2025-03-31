import { Card, CardContent, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VolunteerForm from '../components/VolunteerForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Green Initiative",
    description:
      "Empowers communities through environmental conservation programs such as distributing tree seedlings, raising awareness on environmental sustainability, and promoting climate-smart practices to mitigate the effects of climate change.",
    images: [
      "/assets/GreenInitiative1.jpg",
      "/assets/GreenInitiative2.jpg",
      "/assets/GreenInitiative3.jpg",
      "/assets/GreenInitiative4.jpg",
      "/assets/GreenInitiate5.jpg",
      "/assets/GreenInitiative6.jpg",
    ],
  },
  {
    title: "Mentorship Program",
    description:
      "Aims to change youth attitudes towards hands-on skills training by emphasizing the importance of skilled labor in the global economy. The program connects young individuals with experienced mentors, helping them navigate career choices and acquire technical skills that are in demand.",
    images: [
      "/assets/Mentorship1.jpg",
      "/assets/Mentorship2.jpg",
      "/assets/Mentorship3.jpg",
      "/assets/Mentorship4.jpg",
      "/assets/Mentorship5.jpg",
      "/assets/Mentorship6.jpg",
      "/assets/Mentorship7.jpg",
      "/assets/Mentorship8.jpg",
    ],
  },
  {
    title: "Smart Climate Stool",
    description:
      "An innovative project providing an eco-friendly alternative to traditional wooden stools, combating deforestation through the use of scrap metal. This initiative not only reduces reliance on wood but also upcycles waste materials into functional and durable furniture pieces.",
    image: "/assets/Ekicholong.jpg",
  },
];

const Services = () => {
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-green-600 flex items-center justify-center text-white text-center px-6">
        <div className="max-w-3xl">
          <Typography variant="h3" className="font-bold mb-4">
            OUR SERVICES & INITIATIVES
          </Typography>
          <Typography className="text-lg">
            We are committed to empowering the youth of Turkana through skill-based programs and
            sustainable development initiatives.
          </Typography>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* TVET Green Initiative with Swiper Carousel */}
          <Card className="shadow-lg p-6">
            <Typography variant="h5" className="font-bold mb-4 text-green-600">
              {services[0].title}
            </Typography>
            <Typography className="text-gray-700 mb-4">
              {services[0].description}
            </Typography>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              className="w-full"
            >
              {services[0].images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Green Initiative ${index + 1}`} className="w-fullh-[400px] md:h-[500px] rounded-lg shadow-md" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>

          {/* Mentorship Program with Grid Layout */}
          <Card className="shadow-lg p-6">
            <Typography variant="h5" className="font-bold mb-4 text-green-600">
              {services[1].title}
            </Typography>
            <Typography className="text-gray-700 mb-4">
              {services[1].description}
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services[1].images.map((image, index) => (
                <img key={index} src={image} alt={`Mentorship ${index + 1}`} className="w-full h-[200px] md:h-[250px] rounded-lg shadow-md" />
              ))}
            </div>
          </Card>

          {/* Smart Climate Stool */}
          <Card className="shadow-lg p-6">
            <Typography variant="h5" className="font-bold mb-4 text-green-600">
              {services[2].title}
            </Typography>
            <Typography className="text-gray-700 mb-4">
              {services[2].description}
            </Typography>
            <img src={services[2].image} alt="Smart Climate Stool" className="w-full h-[400px] md:h-[500px] rounded-lg shadow-md" />
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-16 px-6 md:px-20 flex flex-col items-center text-center">
        <Typography variant="h4" className="font-bold mb-6 text-white">
          GET INVOLVED
        </Typography>
        <Typography className="max-w-3xl mx-auto mb-6 text-white">
          Join us in making a difference! Whether through volunteering, partnerships, or donations,
          your support helps us create a brighter future for Turkana's youth.
        </Typography>

        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/donate">
            <Button variant="contained" color="secondary" className="text-lg px-6 py-3">
              Donate Now
            </Button>
          </Link>
          <Button onClick={() => setVolunteerOpen(true)} variant="contained" color="primary" className="text-lg px-6 py-3">
            Volunteer
          </Button>
        </div>
      </section>

      <VolunteerForm open={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
};

export default Services;
