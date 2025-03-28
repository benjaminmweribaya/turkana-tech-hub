import { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";

const VolunteerForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form Validation Schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    skills: Yup.string().required("Please mention your skills"),
    message: Yup.string().required("Tell us why you want to volunteer"),
  });

  // Form Submission Handler
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Volunteer Data Submitted:", values);
      setLoading(false);
      setOpen(false);
      resetForm();
    }, 2000);
  };

  return (
    <>
      {/* Button to Open Modal */}
      <Button onClick={() => setOpen(true)} variant="contained" color="primary" className="mt-4">
        Apply as a Volunteer
      </Button>

      {/* Modal Form */}
      <Modal open={open} onClose={() => setOpen(false)} title="Volunteer Application">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            skills: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Full Name */}
              <Field as={TextField} label="Full Name" name="fullName" fullWidth />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />

              {/* Email */}
              <Field as={TextField} type="email" label="Email" name="email" fullWidth />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

              {/* Phone */}
              <Field as={TextField} label="Phone Number" name="phone" fullWidth />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

              {/* Skills */}
              <Field as={TextField} label="Skills/Experience" name="skills" fullWidth />
              <ErrorMessage name="skills" component="div" className="text-red-500 text-sm" />

              {/* Message */}
              <Field as={TextField} label="Why do you want to volunteer?" name="message" multiline rows={3} fullWidth />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit" variant="contained" color="secondary" disabled={isSubmitting}>
                  {loading ? <CircularProgress size={24} /> : "Submit Application"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default VolunteerForm;
