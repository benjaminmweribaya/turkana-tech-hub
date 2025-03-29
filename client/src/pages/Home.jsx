import { Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import statehouseBg from '../assets/Statehouse.jpg';
import VolunteerForm from '../components/VolunteerForm';
import { useState } from 'react';

const Home = () => {
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${statehouseBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Turkana's Youth through Innovation & Skills
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Transforming lives through TVET, mentorship, and climate resilience initiatives.
          </p>
          <Link to="/about">
            <Button variant="contained" color="primary" className="text-lg px-6 py-3">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 flex flex-col items-center text-center">
        <Typography variant="h4" className="font-bold mb-4 text-black">
          Turkana Tech Youths Hub Community Based Organisation
        </Typography>
        <Typography className="max-w-3xl mx-auto text-black/80">
          We are a social enterprise committed to transforming the lives of youth in Turkana, Kenya,
          through hands-on skills training and sustainable development initiatives.
        </Typography>
      </section>

      {/* Our Values */}
      <section className="bg-green-600 py-16 px-6 md:px-20">
        <Typography variant="h4" className="font-bold text-center mb-6 text-black">
          Our Core Values
        </Typography>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Empowerment', desc: 'Committing to empowering youths by providing access to skills and opportunities that foster self-reliance and personal growth.' },
            { title: 'Community-Centered', desc: 'Prioritizing the needs of the community, ensuring that programs and initiatives align with local aspirations and contribute to collective well-being.' },
            { title: 'Innovation', desc: 'Encouraging creativity and innovation in TVET programs, enabling youth to develop new solutions and approaches to local challenges.' },
            { title: 'Inclusivity', desc: 'Ensuring that all youth, regardless of background or circumstances, have equal access to opportunities and resources.' },
            { title: 'Sustainability', desc: 'Promoting practices and projects that are environmentally and economically sustainable, ensuring long-term benefits for the community.' },
            { title: 'Collaboration', desc: 'Fostering partnerships with local and external stakeholders to enhance the reach and impact of TVET initiatives.' },
            { title: 'Integrity', desc: 'Upholding the highest standards of honesty, transparency, and accountability in all activities and interactions.' }
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={index === 6 ? 'md:col-span-3 w-full md:w-2/3 mx-auto' : ''}
            >
              <Card className="shadow-lg">
                <CardContent>
                  <Typography variant="h6" className="text-2xl font-extrabold uppercase tracking-wide mb-2 text-green-600">
                    {value.title}
                  </Typography>
                  <Typography className="text-black/80">
                    {value.desc}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-black py-16 px-6 md:px-20 flex flex-col items-center text-center">
        <Typography variant="h4" className="font-bold mb-6">
          Get Involved & Support Our Cause
        </Typography>
        <Typography className="mb-6 max-w-2xl mx-auto text-black/80">
          Join us in making a difference. Your support can help create a better future for the youth of Turkana, Kenya.
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

      {/* Volunteer Form Modal */}
      <VolunteerForm open={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
};

export default Home;
