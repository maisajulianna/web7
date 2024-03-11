//Check if the user has the right role
const checkRole = (role) => {
  return (req, res, next) => {
    console.log( "checking for role: ",role);
    //const userRole = req.headers && req.headers.role;
    const userRole = req.headers.role;
    if (userRole === role || userRole === "admin") {
      next();

    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
};

module.exports = {
  checkRole,
};
