// import { useState } from "react";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// export const App = () => {
//   const [postsData, setPostsData] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleGetPosts = async () => {
//     setLoading(true);

//     try {
//       const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json"
//         }
//       });
//       const posts: Post[] = await request.json();
//       setPostsData(posts);
//     } catch (error) {
//       setErrorMessage("Erro ao consultar os dados.")
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <button onClick={handleGetPosts}>Fazer requisição</button>

//       {loading && "Carregando..."}
//       {errorMessage && (
//         <p>{errorMessage}</p>
//       )}

//       <ul>
//         {postsData.map((item) => (
//           <li key={item.id}>
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export const App = () => {
  const handlePostPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Novo post",
        body: "Body post",
        userId: 1
      }),
      headers: {
        "Content-type": "appplication/json"
      }
    });

    const result = await request.json();
    console.log(result);
  };

  const handlePutPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        title: "Novo post PUT",
        body: "Body post"
      }),
      headers: {
        "Content-type": "appplication/json"
      }
    });

    const result = await request.json();
    console.log(`O resultado foi: ${result}`);
  };

  return (
    <div>
      <button onClick={handlePostPosts}>Fazer requisição POST</button>
      <button onClick={handlePutPosts}>Fazer requisição PUT</button>
    </div>
  );
};
