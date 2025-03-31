import { Typography, Card, CardContent } from '@mui/material';
import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const About = () => {
  const faqs = [
    { question: "What is Turkana Tech Youths Hub?", answer: "Turkana Tech Youths Hub is a non-profit organization dedicated to empowering youth through skill development and community-centered initiatives." },
    { question: "How can I join Turkana Tech Youths Hub?", answer: "You can join by reaching out via our contact page or visiting our local offices." },
    { question: "What programs do you offer?", answer: "We offer training in technical and vocational education, entrepreneurship, and environmental sustainability." },
    { question: "Are your programs free?", answer: "Some programs are free while others may require a small fee to cover resources." },
    { question: "How can I donate?", answer: "You can donate through our 'Donate' page where we provide multiple options." },
    { question: "Who are your partners?", answer: "We collaborate with various organizations, including KeNIA, to enhance our impact." },
    { question: "Do you offer online courses?", answer: "Yes, we provide online learning resources for selected courses." },
    { question: "Where are you located?", answer: "We are based in Turkana, Kenya." },
    { question: "Can I volunteer?", answer: "Yes, we welcome volunteers! You can voluneer via the Voluteer application button in the Home page or Contact us to find out how you can help." },
    { question: "What impact have you made?", answer: "We have trained hundreds of youths and implemented various successful community projects." }
  ];

  const awardImages = [
    "/assets/PIAPlaque.jpg",
    "/assets/PIAPlaqueGroup.jpg",
    "/assets/ReceivingPIAPlaque.jpg",
    "/assets/Statehouse.jpg"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-green-600 flex items-center justify-center text-white text-center px-6">
        <div className="max-w-3xl">
          <Typography variant="h3" className="font-bold mb-4">
            ABOUT US
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
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <div className="mx-auto py-16 px-6 md:px-20 text-center flex flex-col items-center">
          <Typography variant="h4" className="font-bold mb-6 text-gray-900">
            Our Partners
          </Typography>
          <Typography className="max-w-3xl mx-auto mb-6 text-gray-700">
            We collaborate with various organizations to enhance the impact of our initiatives.
          </Typography>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <img
            src="/assets/KeNIAlogo.jpg"
            alt="Kenya National Innovation Agency"
            className="w-32 md:w-40 lg:w-48 h-auto"
          />
          <img
            src="/assets/COGLogo.jpg"
            alt="Council of Governors"
            className="w-32 md:w-40 lg:w-48 h-auto"
          />
          <img
            src="/assets/TNHCLogo.jpg"
            alt="The National Heroes Council"
            className="w-32 md:w-40 lg:w-48 h-auto"
          />
        </div>
      </section>

      {/* Awards & Grants */}
      <section className="py-16 px-6 md:px-20 text-center">
        <div className="mx-auto py-16 px-6 md:px-20 flex flex-col items-center text-center">
          <Typography variant="h4" className="font-bold mb-6 text-gray-900">
            Awards & Grants
          </Typography>
          <Typography className="max-w-3xl mx-auto text-gray-700">
            Turkana Tech Youths Hub has received several awards and grants in recognition of our innovative
            environmental initiatives and youth empowerment programs.
          </Typography>
        </div>
        <Carousel
          responsive={{
            superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
            desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
            tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          autoPlay={true}
          infinite={true}
          className="mx-auto w-3/4"
        >
          {awardImages.map((image, index) => (
            <div key={index} className="p-2">
              <img src={image} alt={`Award ${index + 1}`} className="w-full rounded-lg shadow-lg" />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-green-600 text-white py-16 px-6 md:px-20 text-center">
        <div className="mx-auto py-16 px-6 md:px-20 flex flex-col items-center text-center">
          <Typography variant="h4" className="font-bold mb-6 text-white">
            Frequently Asked Questions
          </Typography>
          <div className="max-w-3xl mx-auto text-left">
            {faqs.map((faq, index) => (
              <Accordion key={index} className="bg-white mb-2 rounded-lg">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-bold text-gray-900">
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails className="text-gray-700">{faq.answer}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
