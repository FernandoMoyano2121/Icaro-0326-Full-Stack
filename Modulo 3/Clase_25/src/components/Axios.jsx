import { useEffect, useState } from "react";
import axios from "axios";

export const Axios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Listado de Post</h1>
      {posts.map((post) => (
        <li
          style={{
            backgroundColor: "gray",
            margin: "1rem",
            padding: "10px",
            color: "white",
            borderRadius: "4px",
          }}
          key={post.id}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </div>
  );
};
