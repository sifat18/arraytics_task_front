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

    createItem: build.mutation({
      query: (data) => ({
        url: `/create/items`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["item"],
    }),
    items: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/items",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any) => {
        return {
          items: response.data,
        };
      },
      providesTags: ["item"],
    }),
    updateItem: build.mutation({
      query: (data) => ({
        url: `/items/${data.Id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["item"],
    }),
    deleteItem: build.mutation({
      query: (id) => ({
        url: `/item/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
//
export const {
  useCreateItemMutation,
  useItemsQuery,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = serviceApi;
