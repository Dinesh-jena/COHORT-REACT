import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const apiFetch = async (pageNumber) => {
  const response = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return response.status === 200 ? response.data : [];
};

export const FeatchIndvPost = async(id) => {
    try{
      
        const res = await api.get(`/posts/${id}`);
        return res.status === 200 ? res.data : [];
    }catch(error){
        console.log(error);
    }
}

export default apiFetch;