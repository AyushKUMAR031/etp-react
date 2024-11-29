import React, { useState, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data?.slice(0, 3).map((post) => (  
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;

// import React, { useState, useEffect } from "react";

// const FetchDataComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         setData(result.products); // Storing the fetched products
//       } catch (err) {
//         setError(err.message); // Handling errors
//       } finally {
//         setLoading(false); // Stopping the loading state
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means it will run once after the initial render

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Fetched Products:</h1>
//       <ul>
//         {data.map((product) => (
//           <li key={product.title}>
//             <h3>{product.title}</h3>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FetchDataComponent;
