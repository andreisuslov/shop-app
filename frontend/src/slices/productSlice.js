import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

/*
 * In this section, we are injecting endpoints into the apiSlice.
 * Injecting means that we are adding endpoints to the apiSlice,
 * which serves as a container for all the endpoints.
 * The builder object is used to create the endpoints.
 */
export const productSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: PRODUCTS_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getProductDetails: builder.query({
			query: (productId) => ({
				url: `/${PRODUCTS_URL}/${productId}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

/*
 * Here, we export the endpoints from the apiSlice using a specific convention style.
 * The exported endpoint is named `useGetProductsQuery`, where:
 * - The prefix 'use' is added to the name of the endpoint.
 * - The suffix 'Query' is appended if the endpoint is a query (i.e., fetching data).
 * - If the endpoint is a mutation (i.e., modifying data), the suffix 'Mutation' is used instead.
 */
export const { useGetProductsQuery, useGetProductDetailsQuery } = productSlice;
