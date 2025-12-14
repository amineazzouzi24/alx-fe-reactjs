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
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
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
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
