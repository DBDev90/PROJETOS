import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const App = () => {
  const [postsData, setPostsData] = useState<Post[]>([])

  const handleGetPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    });

    const posts: Post[] = await request.json();

    setPostsData(posts);
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisição</button>

      <ul>
        {postsData.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};