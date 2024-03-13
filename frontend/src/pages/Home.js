// import UploadPost from "../components/UploadPost";
import HomepageContent from "../components/HomepageContent";
import { useState } from "react";

function Home() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [attachment, setAttachment] = useState("");

    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    const author = userData.username;

    // const likes = 0;
    // const commentCount = 0;

    const url = "/api/posts/" + author;
    console.log("author:", author);
    console.log(url);

    const handleSubmit = async () => {

        const post = {title, content, attachment};

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });

        const json = await response.json();
        console.log(json);

        if (!response.ok) {
            console.log("Error: ", json);
        } else {
            setTitle("");
            setContent("");
            setAttachment("");

            console.log("Post created: ", json);
        };
    };
  return (
    <div className="home">
      <div className="home-header">
        <h2>AMACEN</h2>
      </div>
      <div className="content">
        <HomepageContent />
      </div>
      <div className="uploadPost">
        <div className="post-form">
            <h2>Upload a new post</h2>
            <form onSubmit={handleSubmit}>
                <label><input
                    placeholder="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /></label>
                
                <label><textarea
                    placeholder="content"
                    id="post-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                /></label>
              
                <label className="file"><input
                    placeholder="attachment"
                    title="attachment"
                    type="file"
                    multiple="multiple" accept="image/jpg, image/jpeg, image/png"
                    value={attachment}
                    onChange={(e) => setAttachment(e.target.value)}
                /><span>attachment</span></label>
                
                <button className="blue-btn">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
