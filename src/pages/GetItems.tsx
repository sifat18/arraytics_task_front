// import BreadCrumb from "@/components/BreadCrumb";

import GetItemsList from "../components/UI/GetItemsList";
import { getUserInfo } from "../helpers/authHelper";

const GetItems = () => {
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
      <GetItemsList />
    </div>
  );
};

export default GetItems;
