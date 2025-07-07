import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (sort) => {
        return sort ? `products?sort=${sort}` : "products";
      },
    }),
  }),
});
export const { useGetProductsQuery } = productApi;
