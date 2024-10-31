// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
{/* import Cookies from "js-cookie"; */}

// Retrieve the token from cookies
const userToken = '103|GfThsGt6fYQD1UtYNr0zNn6GEbOGOP2Co5y5p0EQ09e1b790';

// Define a service using a base URL and expected endpoints

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({
  
    baseUrl: "http://192.168.43.131:8000/api", 
    prepareHeaders: (headers) => {
      if (userToken) {
        headers.set("authorization", `Bearer ${userToken}`);
      }
      return headers;
    },
  }),
  
  tagTypes: ["Create", "Join","CreatePost","AcceptJoinRequest","ApprovePostOrReject","KickOrMakeAdmin"],
  endpoints: (builder) => ({
 
    /*  get random post */
    getRandomGroupPost: builder.query({
      query: (page = 1) => `group/randomposts?page=${page}`, // Updated to include id
    }),
    /*    get user details */
    getUserDetails: builder.query({
      query: () => {
        return {
          url: "/userdetails",
          method: "GET",
         
        };
      },
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
 
  useGetRandomGroupPostQuery,
  useGetUserDetailsQuery
} = groupsApi;
