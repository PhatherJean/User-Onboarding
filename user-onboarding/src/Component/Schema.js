import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup.string().email("Must be an email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Minimum of 4 characters")
    .matches(
      /(^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.{8,}))/,
      "Password must contain at least one uppercase character and one special character"
    ),
  tos: yup.boolean().required("Must accept Terms Of Service"),
});
