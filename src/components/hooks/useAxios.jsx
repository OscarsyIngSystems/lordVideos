import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (type, url, body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        let response;

        if (type === 'get') {
          response = await axios.get(url);
        } else if (type === 'post') {
          response = await axios.post(url, body);
        }

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, url, body]);

  return { data, error, loading };
};
