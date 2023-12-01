import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { getUserInfo, removeUserInfo } from "../../helpers/authHelper";
import glasses from "/glasses.png";
export const NavBar = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const [first, setfirst] = React.useState("");
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { role } = getUserInfo() as any;
  React.useEffect(() => {
    setfirst(role);
  }, [role]);

  //   logout
  const logout = () => {
    removeUserInfo("accessToken");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={glasses}
          alt=""
          style={{
            transform: "rotate(369.64deg)",
          }}
        />
        SpectraStyle{" "}
      </div>
      <ul className={`menu ${menuActive ? "active" : ""}`}>
        <NavLink to={"/"}>
          <li>Home</li>{" "}
        </NavLink>

        {first ? (
          <NavLink to={"/profile"}>
            <li>Dashboard</li>
          </NavLink>
        ) : null}
        {first ? (
          <li style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </li>
        ) : (
          <NavLink to={"/login"}>
            <li>Login</li>
          </NavLink>
        )}
        {!first ? (
          <NavLink to={"/register"}>
            <li>Register</li>
          </NavLink>
        ) : null}
      </ul>
      <div className="menu-button" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};
