// import BreadCrumb from "@/components/BreadCrumb";

import { getUserInfo } from "../helpers/authHelper";
import GetUsersList from "../components/UI/GetUsersList";

const GetUsers = () => {
  const { role } = getUserInfo() as any;

  const base = role;

  return (
    <div>
      {/* <BreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "all-users", link: `/${base}/all-users` },
        ]}
      /> */}
      <GetUsersList />
    </div>
  );
};

export default GetUsers;
