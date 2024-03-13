import { useEffect, useState } from "react";

const HomepageContent = () => {
    const [posts, setPosts] = useState(null);
    const liked = false;

    // fetch all posts from db
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch ("/api/posts", {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        });
        const json = await response.json();
  
        if (response.ok) {
            setPosts(json);
        }
      };
      fetchPosts();
    }, []);

    /*
    function changeHeart(id) {
      const heart = document.getElementById(id);
      heart.addEventListener("click", async () => {
        const newId = "liked-heart";
        this.setAttribute("id", newId);
      });
    };
    */

    const updateLikes = async (id, likes) => {
      const newLikes = likes + 1;
      const response = await fetch ("/api/posts/" + id, {
        method: "PUT",
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')},
        body: JSON.stringify({likes: newLikes})
      })
      // const json = await response.json();

      if (response.ok) {
        console.log("success liking the photo");
        const liked = true;
        window.location.reload();
        return { response, liked };
      } else {
        console.log("error");
      }
    }
    return (
        <ul>
        {posts && posts.map((post) => (
          <li key={post._id} className="post">
            <h3>@{post.author}</h3>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            {post.attachment && <p>{post.attachment}</p>}
            <div className="likes-box">
              <p classname="likes">{post.likes}</p>
        
              <button className="heart-button" aria-label="Like"  id={liked ? 'liked-heart' : null} onClick={() => updateLikes(post._id, post.likes)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <p classname="likes">{post.commentCount}</p>
              <button class="comment-button" aria-label="Comment">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
                  <path d="M4 4v16l4-4h12V4H4z"></path>
                </svg>
              </button>

            </div>
          </li>
        )).reverse()}
      </ul>
    );
};

export default HomepageContent;