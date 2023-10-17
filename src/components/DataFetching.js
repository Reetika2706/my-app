import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response?.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data?.map((posts) => (
          <li key={posts?.id}>{posts?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
