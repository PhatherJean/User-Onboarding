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
  role: yup
    .string()
    .oneOf(["enforcer", "leader", "civilian"], "Role is required"),
  expertise: yup
    .string()
    .oneOf(["expert", "intermediate", "entry"], "Exp level needed to proceed"),
  tos: yup.boolean().oneOf([true], "Must accept Terms Of Service"),
});
