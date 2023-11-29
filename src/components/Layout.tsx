import { ReactNode } from "react";
import { NavBar } from "./UI/NavBar";
interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
