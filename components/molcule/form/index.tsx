import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import emailjs from "@emailjs/browser";
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaPhone, FaStickyNote } from 'react-icons/fa';
// Define dynamic field configurations with react-icons
interface FieldConfig {
  name: string;
  label: string;
  type: string;
  icon: any;
  // other field configuration properties...
}

const fieldConfigurations: FieldConfig[] = [
  { name: 'name', label: 'Name', type: 'text', icon: <FaUser /> },
  { name: 'email', label: 'Email', type: 'email', icon: <FaEnvelope /> },
  { name: 'phoneNumber', label: 'Phone Number', type: 'number', icon: <FaPhone /> },
  { name: 'message', label: 'Message', type: 'textArea', icon: <FaStickyNote /> },
];
// Create validation schema dynamically based on field configurations
const validationSchema = Yup.object().shape(
  fieldConfigurations.reduce((acc, field) => {
    acc[field.name] = Yup.string().required(`${field.label} is required`);
    return acc;
  }, {} as Record<string, any>)
);

const initialValues = {
  email: '',
  message: '',
  name: '',
  phoneNumber: '',
};

const FormFields: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    // Log form values (replace with your own logic)
    console.log('Form Values:', values);

    // Create the email body with form values
    console.log('Form Values:', values);

    emailjs
    .sendForm(
      "service_6ekxd05",
      "template_r5bsb4h",
      values.name,
      "M7lxxIWPV689inK7H"
    )
    .then(
      (result) => {
        console.log(result.text);
        
      },
      (error) => {
        console.log(error.text);
      }
    );
  // For testing purposes, you might want to remove the following line in production
  // window.location.href = mailtoLink;
};
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {fieldConfigurations.map((field, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-900">
              {field.label}
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {field.icon}
              </div>
              <Field
                type={field.type}
                id={field.name}
                name={field.name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-800 focus:border-slate-800 block w-full ps-10 p-2.5 "
                placeholder={`Enter Your ${field.label}`}
              />
            </div>
            <ErrorMessage name={field.name} component="div" className="text-red-500 text-[10px]" />
          </div>
        ))}

        <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded">
          Submit Your Details
        </button>
      </Form>
    </Formik>
  );
};

export default FormFields;
