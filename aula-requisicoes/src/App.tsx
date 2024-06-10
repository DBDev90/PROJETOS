
export const App = () => {
  const handleGetPosts = async () => {
    const posts = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())

    // const postsJson = await posts.json();
    const postsAwait = await posts

    console.log(postsAwait);
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisição</button>
    </div>
  );
}