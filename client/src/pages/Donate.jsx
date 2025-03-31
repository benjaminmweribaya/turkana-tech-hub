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
  const [currency, setCurrency] = useState("USD");

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    amount: Yup.number().positive("Enter a valid amount").required("Amount is required"),
    paymentMethod: Yup.string().required("Select a payment method"),
    cardNumber: Yup.string().when("paymentMethod", {
      is: "credit_card",
      then: Yup.string().matches(/^[0-9]{16}$/, "Invalid card number").required("Card number is required"),
    }),
    cardName: Yup.string().when("paymentMethod", {
      is: "credit_card",
      then: Yup.string().required("Cardholder name is required"),
    }),
    expiryDate: Yup.string().when("paymentMethod", {
      is: "credit_card",
      then: Yup.string().matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry format (MM/YY)").required("Expiry date is required"),
    }),
    cvc: Yup.string().when("paymentMethod", {
      is: "credit_card",
      then: Yup.string().matches(/^[0-9]{3,4}$/, "Invalid CVC").required("CVC is required"),
    }),
    mpesaNumber: Yup.string().when("paymentMethod", {
      is: "mpesa",
      then: Yup.string().matches(/^(2547|07)[0-9]{8}$/, "Invalid M-Pesa number").required("M-Pesa number is required"),
    }),
    nationalID: Yup.string().when("paymentMethod", {
      is: "mpesa",
      then: Yup.string().matches(/^[0-9]{8}$/, "Invalid National ID").required("National ID is required"),
    }),
  });


  return (
    <div className="bg-white flex flex-col items-center justify-center py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <Typography variant="h3" className="font-bold text-green-600 mb-4">
          SUPPORT OUR CAUSE
        </Typography>
        <Typography className="text-gray-700 max-w-6xl mx-auto">
          Your donation helps us empower the youth in Turkana through education, skills training, and sustainable development.
        </Typography>
      </div>

      {/* Donation Form */}
      <Container maxWidth="lg" className="max-w-6xl">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Formik
              initialValues={{ name: "", email: "", amount: "", paymentMethod: "", cardNumber: "", cardName: "", expiryDate: "", cvc: "", mpesaNumber: "", nationalID: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Donation submitted", values);
                alert("Donation made successfully!");
                resetForm();
              }}
            >
              {({ errors, touched, handleChange, values }) => (
                <Form className="space-y-4">
                  <Field as={TextField} label="Full Name" name="name" fullWidth variant="outlined" error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} />
                  <Field as={TextField} label="Email Address" name="email" type="email" fullWidth variant="outlined" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
                  <Field as={TextField} label={`Donation Amount (${currency})`} name="amount" type="number" fullWidth variant="outlined" error={touched.amount && Boolean(errors.amount)} helperText={touched.amount && errors.amount} />

                  <FormControl fullWidth variant="outlined" error={touched.paymentMethod && Boolean(errors.paymentMethod)}>
                    <InputLabel>Payment Method</InputLabel>
                    <Field as={Select} name="paymentMethod" value={values.paymentMethod} onChange={(e) => { setPaymentMethod(e.target.value); setCurrency(e.target.value === "mpesa" ? "KES" : "USD"); handleChange(e); }} label="Payment Method">
                      <MenuItem value="paypal">PayPal</MenuItem>
                      <MenuItem value="mpesa">M-Pesa</MenuItem>
                      <MenuItem value="credit_card">Credit/Debit Card</MenuItem>
                    </Field>
                  </FormControl>

                  {paymentMethod === "credit_card" && (
                    <>
                      <Field as={TextField} label="Card Number" name="cardNumber" fullWidth variant="outlined" error={touched.cardNumber && Boolean(errors.cardNumber)} helperText={touched.cardNumber && errors.cardNumber} />
                      <Field as={TextField} label="Cardholder Name" name="cardName" fullWidth variant="outlined" error={touched.cardName && Boolean(errors.cardName)} helperText={touched.cardName && errors.cardName} />
                      <div className="flex space-x-4">
                        <Field as={TextField} label="Expiry Date (MM/YY)" name="expiryDate" fullWidth variant="outlined" error={touched.expiryDate && Boolean(errors.expiryDate)} helperText={touched.expiryDate && errors.expiryDate} />
                        <Field as={TextField} label="CVC" name="cvc" fullWidth variant="outlined" error={touched.cvc && Boolean(errors.cvc)} helperText={touched.cvc && errors.cvc} />
                      </div>
                    </>
                  )}
                  {paymentMethod === "mpesa" && (
                    <>
                      <Field as={TextField} label="M-Pesa Phone Number" name="mpesaNumber" fullWidth variant="outlined" error={touched.mpesaNumber && Boolean(errors.mpesaNumber)} helperText={touched.mpesaNumber && errors.mpesaNumber} />
                      <Field as={TextField} label="National ID Number" name="nationalID" fullWidth variant="outlined" error={touched.nationalID && Boolean(errors.nationalID)} helperText={touched.nationalID && errors.nationalID} />
                    </>
                  )}

                  <Button type="submit" variant="contained" color="primary" fullWidth className="bg-green-600 text-white hover:bg-blue-600">
                    Donate Now
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Donate;
