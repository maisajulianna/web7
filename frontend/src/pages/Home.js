import { useEffect, useState } from "react";

function Home() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch ("/api/posts", {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      }
      );
      const json = await response.json();

      if (response.ok) {
          setPosts(json);
      }
    };
    fetchPosts();
  }, []);

  return (
    
    <div className="home">
      
      <div className="home-header"><h2>AMACEN</h2></div>
      <div className="content">
        <section>
          {posts && posts.map((post) => (
            <p key={post._id}>user = {post.title}</p>
          ))}
        </section>
        <section>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </section>
        <section>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </section>
      </div>
    </div>
  );
};
  
  export default Home;