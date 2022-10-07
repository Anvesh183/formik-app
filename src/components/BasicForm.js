import React from "react";
import styles from "./BasicForm.module.css";
import { useFormik } from "formik";

const BasicForm = () => {
  const initialValues = {
    firstName: "Bachu",
    lastName: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
        values.email
      )
    ) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //   console.log(formik.values);
  //   console.log(formik.errors);
  //   console.log(formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Basic Form</h2>
        <div className={styles["form-control"]}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={styles.error}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={styles.error}>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
