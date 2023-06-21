import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEURL}/api/v1/user`,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/login",
        body,
        method: "POST",
      }),
    }),

    userRegister: builder.mutation({
      query: (body) => ({
        url: '/create',
        body,
        method: 'POST'
      })
    })


  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userAuthApi;
export default userAuthApi;
