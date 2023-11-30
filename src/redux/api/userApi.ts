/* eslint-disable @typescript-eslint/no-explicit-any */
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
    clients: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/users",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[]) => {
        return {
          users: response.data,
        };
      },
      providesTags: ["user"],
    }),
    updateClient: build.mutation({
      query: (data) => ({
        url: `/users/${data.Id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
//
export const {
  useCreateUserMutation,
  useClientsQuery,
  useDeleteClientMutation,
  useUpdateClientMutation,
} = serviceApi;
