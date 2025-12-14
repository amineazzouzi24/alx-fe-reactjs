<<<<<<< HEAD
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log("User Registered:", data);
      alert("Registration successful!");
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

=======
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// إعداد القيم الأولية
const initialValues = {
  username: '',
  email: '',
  password: '',
};

// إعداد التحقق باستخدام Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

// دالة الإرسال
const handleSubmit = (values, { resetForm }) => {
  console.log('Form data submitted:', values);
  resetForm(); // إعادة تعيين النموذج بعد الإرسال
};

function FormikForm() {
>>>>>>> a4670bc335da10ab8490dcf45b1b0c29006b8abe
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
<<<<<<< HEAD
        <h2>Register (Formik)</h2>

        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
=======
        <div>
          <label>Username:</label>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Email:</label>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Password:</label>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
>>>>>>> a4670bc335da10ab8490dcf45b1b0c29006b8abe
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> a4670bc335da10ab8490dcf45b1b0c29006b8abe

export default FormikForm;
