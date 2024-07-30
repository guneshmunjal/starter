import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     "x-rapidapi-key": "5b16eb41d9msh479b23a6b301f61p17bc25jsn377b964bfc7b",
  //     "x-rapidapi-host": "jsearch.p.rapidapi.com",
  //   },
  //   params: {
  //     ...query,
  //   },
  // };

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Node.js developer in New-York,USA",
      page: "1",
      num_pages: "1",
      date_posted: "all",
    },
    headers: {
      "x-rapidapi-key": "5b16eb41d9msh479b23a6b301f61p17bc25jsn377b964bfc7b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log("Sending request...");

      setData(response.data);
      console.log("Response received");

      setIsLoading(false);
    } catch (error) {
      setError(error.message || "An unknown error occurred.");

      alert("There is an error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {}, []);
  // useEffect(() => {
  //   fetchData(); // Fetch data on mount
  // }, [endpoint, query]); // Dependencies

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
