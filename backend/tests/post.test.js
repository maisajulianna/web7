const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

const User = require("../models/userModel");
const Post = require("../models/postModel");


const testPosts = [
    {
        title: "Test Post 1",
        content: "This is a post",
        attachment: "https://www.google.com",
    },
    {
        title: "Test Post 2",
        content: "This is also a post",
        attachment: "",
    }
];

const testUser = {
    username: "john_smith",
    email: "john@smith.com",
    password: "jlRS567@##",
    password2: "jlRS567@##",
};

const testAdmin = {
    username: "jane_doe",
    email: "jane@doe.com",
    password: "jane123D!!?",
    password2: "jane123D!!?",
    role: "admin",
};

let token = null;

beforeAll(async () => {
    await User.deleteMany({});
    const user = await api
        .post("/api/user/signup")
        .send(testUser);
    token = user.body.token;
    // console.log("user:", user.body);
    // console.log("token:", token);
});

describe("Test post API routes", () => {
    describe("After a user is signed up", () => {
        beforeEach(async () => {
            const username = testUser.username;
            await Post.deleteMany({});
            await api
                .post("/api/posts/" + username)
                .set("Authorization", "bearer" + token)
                .send(testPosts[0])
                .send(testPosts[1]);
        });

        // GET all posts
        it("should return all posts as JSON", async () => {
            await api
              .get("/api/posts")
              .set("Authorization", "bearer " + token)
              .expect(200)
              .expect("Content-Type", /application\/json/);
          });
        
        // CREATE a new post
        it("should create a new post", async () => {
        const newPost = {
            title: "New Post",
            content: "This is content.",
            attachment: ""
            };
        const username = testUser.username;
        console.log("Creating newPost...");
        console.log("token:", token);
        console.log("username:", username);
        console.log("newPost:", newPost);
        await api
            .post("/api/posts/" + username)
            .set("Authorization", "bearer " + token)
            .send(newPost)
            .expect(200);
        });
        
        // GET a post by ID
        it("should return one post by its id", async () =>  {
            const post = await Post.findOne();
            console.log("post:", post);
            
            await api
                .get("/api/posts/" + post._id)
                .set("Authorization", "bearer " + token)
                .expect(200)
                .expect("Content-Type", /application\/json/);
        });

        // GET all user's posts by username
        it("should return all posts by a user", async () => {
            username = testUser.username;
            const post = await Post.find({ author: username });
            await api
                .get("/api/posts/" + username + "/posts")
                .set("Authorization", "bearer " + token)
                .expect(200)
                .expect("Content-Type", /application\/json/);
            });
    
        // UPDATE a post by ID
        it("should update a post by its id", async () => {
            const post = await Post.findOne();
            const updatedPost = {
                title: "Updated Post",
                content: "Updated content",
                attachment: "",
            };
            await api
                .put("/api/posts/" + post._id)
                .set("Authorization", "bearer " + token)
                .send(updatedPost)
                .expect(200);
            const updatedPostCheck = await Post.findById(post._id);
            expect(updatedPostCheck.toJSON()).toEqual(expect.objectContaining(updatedPost));
        });
    
        // DELETE a post by ID
            it("should delete a post by its id", async () => {
                const post = await Post.findOne();
                await api
                    .delete("/api/posts/" + post._id)
                    .set("Authorization", "bearer " + token)
                    .expect(200);
                const postCheck = await Post.findById(post._id);
                expect(postCheck).toBeNull();
        });
    });
});

afterAll(() => {
    mongoose.connection.close();
  });