import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().min(6).max(32).required(),
});
export const registerSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  Name: yup.string().required("Name is required"),
  password: yup.string().min(6).max(32).required(),
});
export const itemSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
});
