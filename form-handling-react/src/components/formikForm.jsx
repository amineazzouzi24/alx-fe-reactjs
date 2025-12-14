import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// إعادة بناء نموذج التسجيل باستخدام Formik وYup
function FormikForm() {
  // تهيئة القيم الابتدائية للنموذج
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // التحقق من صحة القيم باستخدام Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // دالة التنفيذ عند الإرسال
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data submitted:', values);
    // هنا يمكن إرسال البيانات إلى API وهمي أو حقيقي
    resetForm(); // إعادة ضبط النموذج بعد الإرسال
  };

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
