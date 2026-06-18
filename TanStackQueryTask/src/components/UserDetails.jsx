import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import  {getUserById}  from "../Api/userApi";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    gcTime:1000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error Loading User</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white p-8 rounded-xl w-[500px]">
        <h1 className="text-2xl font-bold mb-5">
          User Details
        </h1>

        <p>
          Name : {user.firstName} {user.lastName}
        </p>

        <p>
          Username : {user.username}
        </p>

        <p>
          Email : {user.email}
        </p>

        <p>
          phone : {user.phone}
        </p>

                <button
        onClick={() => navigate(`/posts/${id}`)}
        className="
            mt-5
            px-4
            py-2
            bg-blue-500
            text-white
            rounded-lg
        "
        >
        View Posts
        </button>
                <button
        onClick={() => navigate(`/Users`)}
        className="
            mt-5
            ml-5
            px-4
            py-2
            bg-blue-500
            text-white
            rounded-lg
        "
        >
        Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;