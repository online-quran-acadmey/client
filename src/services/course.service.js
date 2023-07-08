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
      query: () => '/enrolledCourses',
      providesTags: ["Course"],
    }),

    updateCourse: builder.mutation({
      query: ({ id, body }) => ({
        url: `/update/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ["Course"],
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ["Course"],
    }),

    requestEnroll: builder.mutation({
      query: (body) => ({
        url: `/request`,
        method: 'POST',
        body
      })
    }),

    acceptRequest: builder.mutation({
      query: (body) => ({
        url: `/enrolled`,
        method: 'POST',
        body
      }),
      invalidatesTags: ["Course"],
    }),

    searchCourse: builder.query({
      query: (name) => `/?name=${name}`,
    }),

    totalCourseOfTutor: builder.query({
      query: () => `/tutor-courses`,
      providesTags: ["Course"],
    }),

    totalEnrolledStudents: builder.query({
      query: () => '/total-enrolled',
      providesTags: ["Course"],
    }),

    totalStudentRecord: builder.query({
      query: () => '/total',
      providesTags: ["Course"],
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
  useRequestEnrollMutation,
  useAcceptRequestMutation,
  useLazySearchCourseQuery,
  useTotalCourseOfTutorQuery,
  useTotalEnrolledStudentsQuery,
  useTotalStudentRecordQuery,
} = courseApi;
