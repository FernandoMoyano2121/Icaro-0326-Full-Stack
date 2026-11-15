export const mockAuth = (req, res, next) => {
  req.user = {
    username: "Fernando",
    role: "admin",
  };
  next();
};
