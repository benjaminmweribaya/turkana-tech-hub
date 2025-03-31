import { TextField, Button, Typography, Container, Card, CardContent } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message cannot be empty"),
  });

  return (
    <div className="bg-green-600 min-h-screen flex flex-col items-center justify-center py-16  px-4">
      {/* Contact Header */}
      <div className="text-center mb-10">
        <Typography variant="h3" className="font-bold text-white mb-4">
          CONTACT US
        </Typography>
        <Typography className="text-white max-w-6xl mx-auto">
          Have any questions or want to collaborate? Get in touch with us.
        </Typography>
      </div>

      {/* Contact Form */}
      <Container maxWidth="lg" className="max-w-6xl">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form submitted", values);
                resetForm();
              }}
            >
              {({ errors, touched, handleChange }) => (
                <Form className="space-y-6">
                  {/* Name Field */}
                  <Field
                    as={TextField}
                    label="Full Name"
                    name="name"
                    fullWidth
                    variant="outlined"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    onChange={handleChange}
                  />

                  {/* Email Field */}
                  <Field
                    as={TextField}
                    label="Email Address"
                    name="email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                  />

                  {/* Message Field */}
                  <Field
                    as={TextField}
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    onChange={handleChange}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-green-600 text-white hover:bg-blue-600"
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>

      {/* Google Map Section */}
      <div className="mt-12 w-full max-w-6xl px-4">
        <Typography variant="h5" className="font-bold text-white text-center mb-4">
          OUR LOCATION
        </Typography>
        <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full max-w-6xl border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7974.378524568785!2d35.59349911571855!3d3.1219267973794885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17803ac5455e8fd3%3A0x9a41c7351fd71c8!2sLodwar%2C%20Kenya!5e0!3m2!1sen!2sus!4v1711810792000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
