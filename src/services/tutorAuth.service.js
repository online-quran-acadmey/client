import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEURL}/api/v1/tutor`
})


const tutorAuth = createApi({
    reducerPath: "tutorAuth",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        tutorCreate: builder.mutation({
            query: (body) => ({
                url: '/create',
                method: 'POST',
                body
            })
        }),

        tutorLogin: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            })
        })

    })
});



export default tutorAuth;
export const { useTutorCreateMutation, useTutorLoginMutation } = tutorAuth;


