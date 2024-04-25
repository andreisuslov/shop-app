// Import the createApi and fetchBaseQuery functions from the '@reduxjs/toolkit/query/react' package
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Import the BASE_URL constant from the '../constants' file
import { BASE_URL } from '../constants';

// Create a base query using fetchBaseQuery with the BASE_URL as the base URL for API requests
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

/*
 * API Slice is a container/parent for all the rest of our API endpoints.
 * Currently, it is empty because we don't have any endpoints.
 * We will add endpoints in the future.
 * The 'builder' object is used to create endpoints.
 */
export const apiSlice = createApi({
	// Use the baseQuery as the base query for the API slice
	baseQuery,

	// Define the tag types for the API slice
	// Tag types are used for caching and invalidation of API responses
	tagTypes: ['Product', 'Order', 'User'],

	// Define the endpoints for the API slice using the 'builder' object
	// There are no endpoints defined (an empty object is returned),
	// but other slices can use the same builder object to create endpoints
	endpoints: (builder) => ({}),
});
