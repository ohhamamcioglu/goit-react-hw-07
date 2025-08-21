import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'En az 3 karakter')
      .max(50, 'En fazla 50 karakter')
      .required('Bu alan zorunludur'),
    number: Yup.string()
      .min(3, 'En az 3 karakter')
      .max(50, 'En fazla 50 karakter')
      .required('Bu alan zorunludur'),
  });

  return (
    <div className="w-[250px]">
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };
          onAdd(newContact);
          actions.resetForm();
        }}
      >
        <Form className="flex flex-col gap-5 border rounded-2xl items-center">
          <label htmlFor="name">
            <span className="m-4">Name</span>
            <Field
              className="border border-gray-300 rounded-2xl px-2 mx-2 hover:border-amber-500"
              name="name"
              type="text"
              placeholder="Enter your name"
              id="name"
            />
            <ErrorMessage
              className="text-red-600 ml-15 m-2"
              name="name"
              component="div"
            />{' '}
          </label>
          <label htmlFor="number">
            <span className="m-4">Number</span>
            <Field
              className="border border-gray-300 rounded-2xl px-2 mx-2 hover:border-amber-500"
              name="number"
              type="text"
              placeholder="Enter your number"
              id="number"
            />
            <ErrorMessage
              className="text-red-600 ml-15 m-2"
              name="number"
              component="div"
            />{' '}
          </label>
          <button
            className="border rounded-2xl px-2 w-30 m-2 cursor-pointer hover:border-amber-500 hover:bg-amber-50 hover:text-amber-500"
            type="submit"
          >
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
