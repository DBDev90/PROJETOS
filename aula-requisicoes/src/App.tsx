import axios from "axios";

export const App = () => {
  const handleGetPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => { console.log(response.data); });
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer request</button>
    </div>
  );
}