function checkRole(role) {
    return (req, res, next) => {
      const userRole = req.headers && req.headers.role;
      if (userRole === role || userRole === "admin") {
        next();

      } else {
        res.status(403).json({ message: "Access denied" });
      }
    };
  }
  
  module.exports = {
    checkRole,
  };