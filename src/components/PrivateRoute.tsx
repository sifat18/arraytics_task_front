/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../helpers/authHelper";

const PrivateRoute = ({ children }: any) => {
  const { email } = getUserInfo() as any;

  const navigate = useNavigate();

  if (!email) {
    navigate("/login");
    return null;
  }

  return children;
};

export default PrivateRoute;
