import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url:string, options:object) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }  catch (error: any) {
      json = null;
      setError(error.message);
  } finally {
      setData(json);
      setLoading(false);
    }

    return { response, json };
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
