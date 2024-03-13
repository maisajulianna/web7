import { useEffect, useState } from "react";

const HomepageContent = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch ("/api/posts", {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
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
        <ul>
        {posts && posts.map((post) => (
          <li key={post._id} className="post">
            <h3>{post.author}</h3>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>{post.attachment}</p>
            <p>{post.likes}</p>
            <p>{post.commentCount}</p>
          </li>
        ))}
      </ul>
    );
};

export default HomepageContent;