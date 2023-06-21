import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BASEURL}/api/v1/course`,
  prepareHeaders: (headers, { getState }) => {
    const { login, token } = getState()?.login;
    console.log(login);
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  }
})

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: baseQuery,
  tagTypes: ["Course"],
  endpoints: (builder) => ({

    getAllCourse: builder.query({
      query: () => `/all`,
      providesTags: ["Course"],
    }),

    createCourse: builder.mutation({
      query: (body) => ({
        url: `/create`,
        method: "POST",
        body: body,
      })
    }),

    getAllCourseByTutor: builder.query({
      query: (id) => `/getAllByTutor`,
    }),
  }),
});

export const { useGetAllCourseQuery, useCreateCourseMutation, useGetAllCourseByTutorQuery } = courseApi;
