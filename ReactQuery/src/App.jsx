import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FetchOld from "./components/pages/FetchOld";
import FeatchRQ from "./components/pages/FeatchRQ";
import Home from "./components/pages/Home";
import MainLayout from "./components/Layout/MainLayout";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FeatchIndv from "./components/UI/FeatchIndv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FeatchRQ />,
      },
        {
        path: "/rq/:id",
        element: <FeatchIndv />,
      },
    ],
  },
]);

const App = () => {

  const queryClient = new QueryClient();

  return(
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}></RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
  
};

export default App;
