import axios from "axios";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const App = () => {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  const handleGetPosts = () => {
    axios.get<Post[]>("/posts")
      .then(response => { console.log(response.data); });
  };

  const handlePostPosts = () => {
    axios.post("/posts", {
      title: "Novo post",
      body: "Novo body",
      userId: 1
    })
  };

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer request</button>
      <button onClick={handlePostPosts}>Fazer request POST</button>
    </div>
  );
}