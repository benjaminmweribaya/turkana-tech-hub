import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <Grid container spacing={4} className="text-center md:text-left">
          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold mb-2">
              Contact Us
            </Typography>
            <Typography>Email: info@turkanatechyouthshub.com</Typography>
            <Typography>Location: Lodwar, Turkana, Kenya</Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold mb-2">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-400 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-400 hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-blue-400 hover:underline">
                  Accessibility
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold mb-2">
              Follow Us
            </Typography>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-400">Instagram</a>
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">YouTube</a>
            </div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Turkana Tech Youths Hub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
