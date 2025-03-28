import { Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import statehouseBg from '../assets/Statehouse.jpg';

const Home = () => {
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
      <section className="py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900 dark:text-white">
          About Turkana Tech Youths Hub
        </Typography>
        <Typography className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          We are a social enterprise committed to transforming the lives of youth in Turkana, Kenya, 
          through hands-on skills training and sustainable development initiatives.
        </Typography>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-20">
        <Typography variant="h4" className="font-bold text-center mb-6 text-gray-900 dark:text-white">
          Our Core Values
        </Typography>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Empowerment', desc: 'Providing access to skills and opportunities for self-reliance.' },
            { title: 'Community-Centered', desc: 'Aligning programs with local aspirations.' },
            { title: 'Innovation', desc: 'Encouraging creativity and solutions for local challenges.' },
            { title: 'Inclusivity', desc: 'Ensuring equal access to opportunities for all youth.' },
            { title: 'Sustainability', desc: 'Promoting environmentally and economically sustainable practices.' },
            { title: 'Integrity', desc: 'Upholding honesty, transparency, and accountability.' }
          ].map((value, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </Typography>
                <Typography className="text-gray-700 dark:text-gray-300">
                  {value.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900 dark:text-white">
          Our Programs
        </Typography>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'TVET Green Initiative', desc: 'Empowering communities through environmental conservation.' },
            { title: 'Mentorship Program', desc: 'Shaping the future of youth through guidance and training.' },
            { title: 'Smart Climate Stool', desc: 'Creating eco-friendly alternatives to traditional wooden stools.' }
          ].map((program, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent>
                <Typography variant="h6" className="font-bold mb-2 text-gray-900 dark:text-white">
                  {program.title}
                </Typography>
                <Typography className="text-gray-700 dark:text-gray-300">
                  {program.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6">
          Get Involved & Support Our Cause
        </Typography>
        <Typography className="mb-6 max-w-2xl mx-auto">
          Join us in making a difference. Your support can help create a better future for the youth of Turkana.
        </Typography>
        <Link to="/donate">
          <Button variant="contained" color="secondary" className="text-lg px-6 py-3">
            Donate Now
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
