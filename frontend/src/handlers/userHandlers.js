const users = [];

let nextUserId = 0;

function getNewUserId() {
    const newUserId = nextUserId;
    nextUserId++;
    return newUserId;
}


// handlers

// GET /users
const getAllUsers = (req, res) => {
    console.log(users);
    res.json(users);
};


// POST /users  (create a new user)
const createUser = (req, res) => {
    const username = req.body.username;
    const newUser = {
      userId: getNewUserId(),
      username,
      email,
      password,
    };
    users.push(newUser);
    res.json(newUser);
  };
  

  // GET /users/:userId  (get a user by id)
  const getUserById = (req, res) => {
    const userId = req.params.userId;
    const user = user.find((user) => user.userId == userId);
    res.json(user);
  };
  
  // PUT /users/:userId (update a user by id)
  const updateUser = (req, res) => {
    const username = req.body.username;
    const userId = req.params.userId;
    const user = users.find((user) => user.userId == userId);
    user.username = username;
    res.json(user);
  };
  
  // DELETE /users/:userId
  const deleteUser = (req, res) => {
    const userId = req.params.userId;
    const userIdx = users.findIndex((user) => user.userId == userId);
    users.splice(userIdx, 1);
    res.json({ message: "success" });
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };