import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FeatchIndvPost } from "../../Api/api";
import { useParams } from "react-router-dom";

const FeatchIndv = () => {

    const {id} = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post",id], //usestate ka kamm kar raha hai
    queryFn: async () => await FeatchIndvPost(id),
  });

  if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error: {error.message || "Somthing went wrong!"}</p>;

  return <div>
    <h1>FeatchIndv,{id}</h1>
    </div>;
};

export default FeatchIndv;
