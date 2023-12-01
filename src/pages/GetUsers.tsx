// import BreadCrumb from "@/components/BreadCrumb";

import GetUsersList from "../components/UI/GetUsersList";

const GetUsers = () => {
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
