import React, { useContext, useEffect, useState } from "react";
import LoginPage from "./LoginPage";

import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../Api/userApi";

const TableComponents = () => {
  const [page, setPage] = useState(1);

  const [searchUser, setsearchUser] = useState("");

  const navigate = useNavigate();

  const redux = useSelector((state) => state.auth.user);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page),
  });

  const users = data?.users || [];

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchUser.toLowerCase()),
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error Loading Users</h1>;
  }

  if (!users.length) {
    return <h1>No Users Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-10">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center tracking-wide">
          Welcome: {redux?.username}
        </h1>

        <div className="mb-6 text-white">
          <h1>Serach User:-</h1>
          <input
            type="text"
            placeholder="Search User..."
            value={searchUser}
            onChange={(e) => setsearchUser(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-600">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-purple-600 to-blue-400 text-white">
              <tr>
                <th className="p-4 text-lg border border-gray-500">
                  Employee Name
                </th>

                <th className="p-4 text-lg border border-gray-500">Eamil</th>

                <th className="p-4 text-lg border border-gray-500">Company</th>

                <th className="p-4 text-lg border border-gray-500 text-center">
                  View
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((elem) => (
                <tr
                  onClick={() => navigate(`/user/${elem.id}`)}
                  key={elem.id}
                  className="
                        bg-gray-800
                        text-white
                        hover:bg-gray-700
                        hover:scale-[1.01]
                        transition-all
                        duration-300
                        "
                >
                  <td className="p-4 border border-gray-600 font-semibold">
                    {elem.firstName} {elem.lastName}
                  </td>

                  <td className="p-4 border border-gray-600">{elem.email}</td>

                  <td className="p-4 border border-gray-600">
                    {elem.company?.name}
                  </td>

                  <td className="p-4 border border-gray-600 text-center">
                    <button
                      onClick={() => navigate(`/user/${elem.id}`)}
                      className="
                    px-4
                    py-2
                    bg-red-500
                    hover:bg-red-600
                    active:scale-90
                    rounded-lg
                    font-semibold
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-red-500/50
                    border
                    border-red-300
                     "
                    >
                      view
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-white font-semibold">Page {page}</span>

            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page >= Math.ceil(data?.total / 10)}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* {showDelete && (
        <DeletePage
          closeModal={() => setShowDelete(false)}
          confirmDelete={deleteHandler}
        />
      )} */}

      {/* {popUp && <PopUp />} */}
    </div>
  );
};

export default TableComponents;
