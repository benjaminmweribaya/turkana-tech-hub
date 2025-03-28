import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    amount: Yup.number().positive("Enter a valid amount").required("Amount is required"),
    paymentMethod: Yup.string().required("Select a payment method"),
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
      {/* Header Section */}
      <div className="text-center mb-10">
        <Typography variant="h3" className="font-bold text-blue-700 mb-4">
          Support Our Cause
        </Typography>
        <Typography className="text-gray-700 max-w-2xl mx-auto">
          Your donation helps us empower the youth in Turkana through education, skills training, and sustainable development.
        </Typography>
      </div>

      {/* Donation Form */}
      <Container maxWidth="sm">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Formik
              initialValues={{ name: "", email: "", amount: "", paymentMethod: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Donation submitted", values);
                resetForm();
              }}
            >
              {({ errors, touched, handleChange, values }) => (
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

                  {/* Donation Amount */}
                  <Field
                    as={TextField}
                    label="Donation Amount (USD)"
                    name="amount"
                    type="number"
                    fullWidth
                    variant="outlined"
                    error={touched.amount && Boolean(errors.amount)}
                    helperText={touched.amount && errors.amount}
                    onChange={handleChange}
                  />

                  {/* Payment Method Dropdown */}
                  <FormControl fullWidth variant="outlined" error={touched.paymentMethod && Boolean(errors.paymentMethod)}>
                    <InputLabel>Payment Method</InputLabel>
                    <Field
                      as={Select}
                      name="paymentMethod"
                      value={values.paymentMethod}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        handleChange(e);
                      }}
                      label="Payment Method"
                    >
                      <MenuItem value="paypal">PayPal</MenuItem>
                      <MenuItem value="mpesa">M-Pesa</MenuItem>
                      <MenuItem value="credit_card">Credit/Debit Card</MenuItem>
                      <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
                    </Field>
                  </FormControl>
                  {touched.paymentMethod && errors.paymentMethod && (
                    <Typography color="error" className="text-sm">
                      {errors.paymentMethod}
                    </Typography>
                  )}

                  {/* Payment Instructions Based on Selection */}
                  {paymentMethod === "paypal" && (
                    <Typography className="text-blue-700 text-center">Proceed to PayPal for secure payment.</Typography>
                  )}
                  {paymentMethod === "mpesa" && (
                    <Typography className="text-green-600 text-center">Send your donation to **M-Pesa Paybill 123456**.</Typography>
                  )}
                  {paymentMethod === "credit_card" && (
                    <Typography className="text-gray-700 text-center">Enter your card details at the payment gateway.</Typography>
                  )}
                  {paymentMethod === "bank_transfer" && (
                    <Typography className="text-gray-700 text-center">
                      Use **Bank Account: 987654321 - Turkana Tech Youths Hub**.
                    </Typography>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="bg-blue-700 text-white hover:bg-blue-600"
                  >
                    Donate Now
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>

      {/* Additional Donation Options */}
      <div className="mt-10 text-center">
        <Typography variant="h5" className="font-bold text-gray-800">
          Other Ways to Support
        </Typography>
        <Typography className="text-gray-700 mt-2">
          If you prefer to donate in other ways, please contact us at **info@turkanatechyouthshub.com**.
        </Typography>
      </div>
    </div>
  );
};

export default Donate;
