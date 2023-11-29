import { decodedToken } from "./jwt";
import { getFromLocalStorage, setToLocalStorage } from "./local-storage";
import { instance as axiosInstance } from "./axiosInstance";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("accessToken", accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:7000",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
