import { Card, CardContent, Typography } from '@mui/material';

const services = [
  {
    title: "TVET Green Initiative",
    description:
      "Empowers communities through environmental conservation programs such as distributing tree seedlings and raising awareness on environmental sustainability.",
    image: "/src/assets/Green Initiative 1.jpg",
  },
  {
    title: "Mentorship Program",
    description:
      "Aims to change youth attitudes towards hands-on skills training by emphasizing the importance of skilled labor in the global economy.",
    image: "/src/assets/Mentorship 1.jpg",
  },
  {
    title: "Smart Climate Stool",
    description:
      "An innovative project providing an eco-friendly alternative to traditional wooden stools, combating deforestation through the use of scrap metal.",
    image: "/src/assets/Green Initiative 4.jpg",
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-blue-700 flex items-center justify-center text-white text-center px-6">
        <div className="max-w-3xl">
          <Typography variant="h3" className="font-bold mb-4">
            Our Services & Initiatives
          </Typography>
          <Typography className="text-lg">
            We are committed to empowering the youth of Turkana through skill-based programs and 
            sustainable development initiatives.
          </Typography>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <CardContent>
                <Typography variant="h5" className="font-bold mb-2 text-blue-700">
                  {service.title}
                </Typography>
                <Typography className="text-gray-700">{service.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <Typography variant="h4" className="font-bold mb-6 text-gray-900">
          Get Involved
        </Typography>
        <Typography className="max-w-3xl mx-auto mb-6 text-gray-700">
          Join us in making a difference! Whether through volunteering, partnerships, or donations, 
          your support helps us create a brighter future for Turkana's youth.
        </Typography>
      </section>
    </div>
  );
};

export default Services;
