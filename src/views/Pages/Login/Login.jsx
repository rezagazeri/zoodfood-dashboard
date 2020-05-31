import React, { useContext,useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import AuthContext from "./../../../context/auth/authContext";
import SiginForm from "./SigninForm";

const validationSchema = yup.object({
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

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, token ,isAuthenticated,error,clearError} = authContext;

  useEffect(()=>{
    if(isAuthenticated)props.history.push('/dashboard');
    if(error)
},[isAuthenticated,error,props.history])

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmiting }) => {
        console.log(token);
        login(values);
        resetForm();
        setSubmiting(false);
      }}
    >
      {(props) => <SiginForm {...props} />}
    </Formik>
  );
};

export default Login;
