import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  // const options = {
  //   method: 'GET',
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     'X-RapidAPI-Key': '9815042182msh5203328b6433ffp1eabb4jsn76039b0b7c0f',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //   },
  //   params: { description: "node.js developer in new-york,usa", page: '1',
  //     num_pages: '1'
  //   },
  // }

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "9815c42182msh5c2e3328b6433ffp1eabb4jsn76039b0b7c0f",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };


  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setisLoading(false)
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setisLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData(); // --> Refetch the data
  }

  return { data, error, isLoading, refetch };
}

export default useFetch;