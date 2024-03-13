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

    function changeHeart(id) {
      const heart = document.getElementById(id);
      heart.addEventListener("click", async () => {
        const newId = "liked-heart";
        this.setAttribute("id", newId);
      });
    };

    const updateLikes = async (id) => {
      const response = await fetch ("/api/posts/" + id, {
        method: "PUT",
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token')},
        body: JSON.stringify({ likes: likes + 1 })
      });
      const json = await response.json();

      if (response.ok) {
        console.log("success liking the photo");
        const liked = true;
        return liked;
      }
    }

    // onClick={updateLikes(post._id)}
  
    return (
        <ul>
        {posts && posts.map((post) => (
          <li key={post._id} className="post">
            <h3>{post.author}</h3>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            {post.attachment && <p>{post.attachment}</p>}
            <div className="actions">
              <p id="likes">{post.likes}</p>
              <p id="comments">{post.commentCount}</p>

              <button className="heart-button" aria-label="Like"  id={liked ? 'liked-heart' : null}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

            </div>
          </li>
        )).reverse()}
      </ul>
    );
};

export default HomepageContent;