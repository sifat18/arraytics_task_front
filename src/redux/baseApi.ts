import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../helpers/axiosBaseQuery";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:7000/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["user", "item", "order"],
});
