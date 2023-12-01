/* eslint-disable @typescript-eslint/no-explicit-any */
// import BreadCrumb from "@/components/BreadCrumb";

import GetItemsList from "../components/UI/GetItemsList";

const GetItems = () => {
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
