import { useState } from "react";

const UploadPost = () => {
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
        
        return (
            <div className="post-form">
                <h2>Upload a new post</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Content:</label>
                    <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <label>Attachment:</label>
                    <input
                        type="text"
                        value={attachment}
                        onChange={(e) => setAttachment(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

export default UploadPost;