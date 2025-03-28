import { Container, Typography, Card, CardContent } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Container maxWidth="md">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            {/* Header Section */}
            <Typography variant="h3" className="font-bold text-blue-700 text-center mb-6">
              Privacy Policy
            </Typography>
            <Typography className="text-gray-700 text-center mb-6">
              Last updated: March 2025
            </Typography>

            {/* Introduction */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Introduction
            </Typography>
            <Typography className="text-gray-700 mb-4">
              Turkana Tech Youths Hub ("we," "our," or "us") is a Community-Based Organization dedicated to empowering youth in Turkana, Kenya. 
              We respect your privacy and are committed to protecting any personal data that you provide to us. This Privacy Policy explains 
              how we collect, use, and safeguard your information.
            </Typography>

            {/* Information We Collect */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Information We Collect
            </Typography>
            <Typography className="text-gray-700">
              We collect the following types of information:
            </Typography>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>
                <strong>Personal Information:</strong> Name, email, phone number, and payment details when you donate or contact us.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, device type, and website usage data collected via cookies.
              </li>
            </ul>

            {/* How We Use Your Information */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              How We Use Your Information
            </Typography>
            <Typography className="text-gray-700">
              We use your information to:
            </Typography>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Process donations and issue receipts.</li>
              <li>Respond to inquiries and provide support.</li>
              <li>Improve our website and outreach efforts.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            {/* Sharing Your Information */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Sharing Your Information
            </Typography>
            <Typography className="text-gray-700 mb-4">
              We do not sell, rent, or trade your personal information. However, we may share data with:
            </Typography>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Payment processors to handle donations securely.</li>
              <li>Legal authorities if required by law.</li>
              <li>Partners involved in our programs with your consent.</li>
            </ul>

            {/* Data Security */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Data Security
            </Typography>
            <Typography className="text-gray-700 mb-4">
              We take appropriate security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
            </Typography>

            {/* Cookies and Tracking */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Cookies and Tracking
            </Typography>
            <Typography className="text-gray-700 mb-4">
              Our website uses cookies to enhance your experience. You can modify your browser settings to decline cookies if preferred.
            </Typography>

            {/* Your Rights */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Your Rights
            </Typography>
            <Typography className="text-gray-700 mb-4">
              You have the right to:
            </Typography>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
              <li>Request access to your personal data.</li>
              <li>Ask us to correct or delete your information.</li>
              <li>Opt-out of communications at any time.</li>
            </ul>

            {/* Changes to This Policy */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Changes to This Policy
            </Typography>
            <Typography className="text-gray-700 mb-4">
              We may update this policy periodically. Any changes will be posted on this page.
            </Typography>

            {/* Contact Information */}
            <Typography variant="h5" className="font-bold text-gray-900 mb-4">
              Contact Us
            </Typography>
            <Typography className="text-gray-700">
              If you have any questions about our Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
