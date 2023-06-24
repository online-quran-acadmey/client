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
      }),
      invalidatesTags: ["Course"],
    }),

    getAllCourseByTutor: builder.query({
      query: () => `/getAllByTutor`,
      providesTags: ["Course"],
    }),


    getAllEnrolledCourse: builder.query({
      query: () => '/enrolledCourses'
    }),

    updateCourse: builder.mutation({
      query: (data) => ({
        url: `/update/${data.id}`,
        method: 'PUT',
        body: data.body
      })
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: 'DELETE'
      })
    }),

    requestEnroll: builder.mutation({
      query: (body) => ({
        url: `/request`,
        method: 'POST',
        body
      })
    })

  }),
});

export const {
  useGetAllCourseQuery,
  useCreateCourseMutation,
  useGetAllCourseByTutorQuery,
  useGetAllEnrolledCourseQuery,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
  useRequestEnrollMutation
} = courseApi;
