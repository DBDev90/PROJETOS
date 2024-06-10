import axios from "axios";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const App = () => {
  const handleGetPosts = () => {
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then(response => { console.log(response.data); });
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer request</button>
    </div>
  );
}