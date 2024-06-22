import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useAddMovies = () => {
  const [loading, setLoading] = useState(false);

  const createMovies = async (inputs) => {
    console.log(inputs);
    setLoading(true);
    try {
      const response = await axios("http://localhost:3000/api/movies/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(inputs),
      });
    

      const {data} = response;
      console.log(data);

      toast.success(data.message);
      console.log(data);

    } catch (error) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };
    
    return { createMovies, loading };
};

export default useAddMovies;
