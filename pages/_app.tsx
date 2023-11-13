import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  // HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
