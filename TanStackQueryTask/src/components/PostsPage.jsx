import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {getUserPosts} from '../Api/userApi';
import { useNavigate } from "react-router-dom";

const PostComponent = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn:()=>getUserPosts(id),
  });

  if (isLoading)
    return (
      <h2 className="text-center text-xl font-semibold mt-10">
        Loading...
      </h2>
    );

  if (error)
    return (
      <h2 className="text-center text-xl text-red-500 mt-10">
        Error fetching posts
      </h2>
    );

 return (
  <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-8">
      User {id} Posts
    </h2>

    <div className="space-y-4">
      {data?.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {post.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            {post.body}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm"
              >
                #{tag}
              </div>
            ))}
          </div>

        
          <div className="flex justify-between items-center border-t pt-3">
            <div className="flex gap-3">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg">
                <h1>Like:-</h1> {post.reactions.likes}
              </div>

              <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg">
                <h1>DisLike:-</h1> {post.reactions.dislikes}
              </div>
            </div>

            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              <h1>Views:-</h1> {post.views} Views
            </div>
          </div>
        </div>
      ))}
    </div>

     
    <button
        onClick={() => navigate(`/user/${id}`)}
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
);
};

export default PostComponent;