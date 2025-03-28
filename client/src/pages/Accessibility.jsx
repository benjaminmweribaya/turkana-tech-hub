import { Container, Typography, Card, CardContent } from "@mui/material";

const Accessibility = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Container maxWidth="md">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            {/* Header Section */}
            <Typography variant="h3" className="font-bold text-blue-700 text-center mb-6">
              Accessibility Statement
            </Typography>
            <Typography className="text-gray-700 text-center mb-6">
              Last updated: March 2025
            </Typography>

            {/* Introduction */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Our Commitment
            </Typography>
            <Typography className="text-gray-700 mb-4">
              Turkana Tech Youths Hub is committed to ensuring accessibility for all individuals, including those with disabilities. 
              We strive to provide an inclusive digital experience that allows equal access to information and services.
            </Typography>

            {/* Accessibility Features */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Accessibility Features
            </Typography>
            <Typography className="text-gray-700">
              To enhance accessibility, we have implemented the following features:
            </Typography>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Keyboard navigability for all interactive elements.</li>
              <li>Contrast-friendly colors for improved readability.</li>
              <li>Screen-reader-friendly labels and alternative text for images.</li>
              <li>Resizable text to accommodate different visual needs.</li>
              <li>Dark mode option for user preference.</li>
            </ul>

            {/* Assistive Technology Compatibility */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Assistive Technology Compatibility
            </Typography>
            <Typography className="text-gray-700 mb-4">
              Our website is designed to be compatible with assistive technologies such as:
            </Typography>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Screen readers (e.g., NVDA, JAWS, VoiceOver).</li>
              <li>Speech recognition software.</li>
              <li>Keyboard-only navigation.</li>
              <li>Browser zoom and text resizing tools.</li>
            </ul>

            {/* Ongoing Improvements */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Ongoing Improvements
            </Typography>
            <Typography className="text-gray-700 mb-4">
              We continuously work to enhance accessibility and follow industry best practices, including the Web Content Accessibility Guidelines (WCAG) 2.1.
              If you encounter any accessibility barriers, please let us know so we can make improvements.
            </Typography>

            {/* Contact Us */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Contact Us
            </Typography>
            <Typography className="text-gray-700">
              If you experience any difficulty accessing our website or have suggestions for improvement, please reach out:
            </Typography>
            <Typography className="text-gray-700 mt-2">
              📧 Email: <span className="text-blue-700">info@turkanatechyouthshub.com</span>
            </Typography>
            <Typography className="text-gray-700">
              📍 Location: Lodwar, Turkana, Kenya
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Accessibility;
