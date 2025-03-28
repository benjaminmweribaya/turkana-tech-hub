import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center" textAlign="center">
          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold mb-3 text-blue-400">
              Contact Us
            </Typography>
            <Typography>Email: info@turkanatechyouthshub.com</Typography>
            <Typography>Phone: +254 123 456 789</Typography>
            <Typography>Location: Lodwar, Turkana, Kenya</Typography>
          </Grid>

          {/* Navigation Links - Main pages */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold mb-3 text-blue-400">
              Navigation
            </Typography>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-400 hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-blue-400 hover:underline">About Us</Link></li>
              <li><Link to="/services" className="text-blue-400 hover:underline">Our Services</Link></li>
              <li><Link to="/contact" className="text-blue-400 hover:underline">Contact Us</Link></li>
              <li><Link to="/donate" className="text-blue-400 hover:underline">Donate</Link></li>
            </ul>
          </Grid>

          {/* Quick Links - Additional pages */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold mb-3 text-blue-400">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li><Link to="/terms-and-conditions" className="text-blue-400 hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link></li>
              <li><Link to="/accessibility" className="text-blue-400 hover:underline">Accessibility</Link></li>
            </ul>
          </Grid>


          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold mb-3 text-blue-400">
              Follow Us
            </Typography>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://web.facebook.com/TurkanaTechYouthsHubCBO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Facebook fontSize="large" />
              </a>
              <a
                href="https://www.youtube.com/@turkanatechyouthshub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                <YouTube fontSize="large" />
              </a>
            </div>
          </Grid>
        </Grid>

        {/* Break before Copyright */}
        <div className="border-t border-gray-600 mt-6 mb-4"></div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Turkana Tech Youths Hub. All rights reserved.
        </div>

        {/* Break before Tevexa Contact */}
        <div className="border-t border-gray-600 mt-4 mb-4"></div>

        {/* Tevexa Technologies Contact */}
        <div className="text-center text-sm text-gray-300">
          Need a website? Contact Tevexa Technologies
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5wB4BdJ-QwCgiV0e_rWxpubjcZTiLgDkt3AFh3B_VPCg7GA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-1"
          >
            here
          </a>.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
