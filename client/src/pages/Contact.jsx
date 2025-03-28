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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
      {/* Contact Header */}
      <div className="text-center mb-10">
        <Typography variant="h3" className="font-bold text-blue-700 mb-4">
          Contact Us
        </Typography>
        <Typography className="text-gray-700 max-w-2xl mx-auto">
          Have any questions or want to collaborate? Get in touch with us.
        </Typography>
      </div>

      {/* Contact Form */}
      <Container maxWidth="sm">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form submitted", values);
                resetForm();
              }}
            >
              {({ errors, touched, handleChange }) => (
                <Form className="space-y-4">
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
                    className="bg-blue-700 text-white hover:bg-blue-600"
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>

      {/* Contact Info */}
      <div className="mt-10 text-center">
        <Typography variant="h5" className="font-bold text-gray-800">
          Reach Out to Us
        </Typography>
        <Typography className="text-gray-700 mt-2">
          📧 Email: info@turkanatechyouthshub.com <br />
          📍 Location: Lodwar, Turkana, Kenya
        </Typography>
      </div>
    </div>
  );
};

export default Contact;
