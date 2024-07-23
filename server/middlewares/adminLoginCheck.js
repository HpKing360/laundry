const jwt = require("jsonwebtoken");
require("dotenv").config();
const adminLoginCheck = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { id, email } = decoded;
    req.id = id;
    req.email = email;
    next();
  } catch (error) {
    next("Authontication failed!");
  }
};

export default adminLoginCheck;
