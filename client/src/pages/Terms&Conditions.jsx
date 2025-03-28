import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" className="py-16">
      {/* Page Title */}
      <Typography variant="h4" className="font-bold text-center mb-6 text-black">
        Terms and Conditions
      </Typography>

      {/* Introduction */}
      <Typography className="mb-4 text-gray-700">
        Welcome to Turkana Tech Youths Hub. By accessing or using our website and services, you agree to comply with the following terms and conditions.
      </Typography>

      {/* Usage Terms */}
      <Box className="mb-6">
        <Typography variant="h6" className="font-semibold text-black mb-2">
          1. Acceptance of Terms
        </Typography>
        <Typography className="text-gray-700">
          By using our website, you confirm that you have read, understood, and agreed to these terms. If you do not agree, please do not use our services.
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h6" className="font-semibold text-black mb-2">
          2. User Responsibilities
        </Typography>
        <Typography className="text-gray-700">
          You agree to use our platform responsibly and not engage in any illegal or harmful activities while using our services.
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h6" className="font-semibold text-black mb-2">
          3. Intellectual Property
        </Typography>
        <Typography className="text-gray-700">
          All content on our platform, including logos, text, and graphics, belongs to Turkana Tech Youths Hub and may not be used without permission.
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h6" className="font-semibold text-black mb-2">
          4. Termination of Access
        </Typography>
        <Typography className="text-gray-700">
          We reserve the right to terminate or restrict your access to our services if you violate any of these terms.
        </Typography>
      </Box>

      {/* Disclaimer */}
      <Box className="mb-6">
        <Typography variant="h6" className="font-semibold text-black mb-2">
          5. Disclaimer
        </Typography>
        <Typography className="text-gray-700">
          Our services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box className="mb-6">
        <Typography variant="h6" className="font-semibold text-black mb-2">
          6. Contact Information
        </Typography>
        <Typography className="text-gray-700">
          If you have any questions about these terms, please contact us at <Link to="/contact" className="text-blue-600">our contact page</Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
