import { baseApi } from "../baseApi";
export type IUser = {
  Id?: string;
  Name: string;
  role: "admin" | "client";
  password: string;
  email: string;
  createdAt: string;
  created_by: string;
  __v?: number;
};
export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faculty user endpoint

    createUser: build.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
//
export const { useCreateUserMutation } = serviceApi;
