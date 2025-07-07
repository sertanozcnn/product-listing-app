import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.REACT_APP_BACKEND_API_URL ||
  "https://productapi-4lmzhf5w.b4a.run/api";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ sort, lang, currency }) => {
        let url = "products?";
        if (sort) url += `sort=${sort}&`;
        if (lang) url += `lang=${lang}&`;
        if (currency) url += `currency=${currency}&`;
        return url.slice(0, -1);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
