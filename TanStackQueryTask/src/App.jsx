import React, { useContext, useState } from "react";
// import { UserDataContext } from "./context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import TableComponents from "./components/TableComponents";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import UserDetails from "./components/UserDetails";
import PostsPage from "./components/PostsPage";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {

  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Users" element={<TableComponents />} />
        <Route
        path="/user/:id"
        element={<UserDetails />}
        
        />
        <Route
  path="/posts/:id"
  element={<PostsPage />}
/>
        </Routes>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      
    </div>
  );
};

export default App;
