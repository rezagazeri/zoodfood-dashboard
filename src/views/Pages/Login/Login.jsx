import React from "react";
import * as yup from "yup";
import { withFormik, yupToFormErrors } from "formik";

import SiginForm from "./SigninForm";

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ username: "", password: "" }),

  // Custom sync validation
  validate: (values) => {
    const schema = yup.object().shape({
      username: yup
        .string()
        .min(4, "نام کاربری باید بیشتر از ۴ حرف باشد")
        .required()
        .typeError("Invalid number"),
      password: yup
        .string()
        .min(6, "پسورد باید بیشتر از ۶ حرف باشد")
        .max(30, "پسورد باید کمتر از ۳۰ حرف باشد")
        .required(),
    });

    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return yupToFormErrors(error);
    }
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(SiginForm);

const Login = () => <MyEnhancedForm />;

export default Login;
