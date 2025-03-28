import { Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-700 flex items-center justify-center text-white text-center px-6">
        <div className="max-w-3xl">
          <Typography variant="h3" className="font-bold mb-4">
            About Us
          </Typography>
          <Typography className="text-lg">
            Turkana Tech Youths Hub is dedicated to empowering the youth of Turkana through skill 
            development, technical and vocational education, and community-centered initiatives.
          </Typography>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-2 text-blue-700">
                Our Vision
              </Typography>
              <Typography className="text-gray-700">
                To create a self-reliant and skilled youth community in Turkana, driving sustainable 
                development and socio-economic transformation through the power of TVET.
              </Typography>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-2 text-blue-700">
                Our Mission
              </Typography>
              <Typography className="text-gray-700">
                To empower the youth of Turkana through quality TVET, climate resilience initiatives, 
                fostering innovation, entrepreneurship, and employability to improve livelihoods and 
                drive community growth.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Partners */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900">
          Our Partners
        </Typography>
        <Typography className="max-w-3xl mx-auto mb-6 text-gray-700">
          We collaborate with various organizations to enhance the impact of our initiatives.
        </Typography>
        <div className="flex justify-center">
          <img
            src="/src/assets/KeNIA logo.jpg"
            alt="Kenya National Innovation Agency"
            className="w-40 md:w-48"
          />
        </div>
      </section>

      {/* Awards & Grants */}
      <section className="py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900">
          Awards & Grants
        </Typography>
        <Typography className="max-w-3xl mx-auto text-gray-700">
          Turkana Tech Youths Hub has received several awards and grants in recognition of our innovative 
          environmental initiatives and youth empowerment programs.
        </Typography>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-700 text-white py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6">
          Get in Touch
        </Typography>
        <Typography className="mb-6 max-w-2xl mx-auto">
          Reach out to us for more information or partnership inquiries.
        </Typography>
        <Typography variant="h6">Email: info@turkanatechyouthshub.com</Typography>
        <Typography variant="h6">Location: Lodwar, Turkana, Kenya</Typography>
      </section>
    </div>
  );
};

export default About;
