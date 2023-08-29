const jwt = require("jsonwebtoken");

exports.checkAuth = (request, response, next) => {
  // const token = request.body.token

  const barearToken = request.headers.authorization;

  if (!barearToken) {
    return response.status(403).json("No token provided");
  }
  const token = barearToken.split(" ")[1];

  // console.log(barearToken);

  if (token) {
    jwt.verify(token, "95ggrt678", {}, (erorr, decodedToken) => {
      if (erorr) {
        return response.status(401);
      }
      request.decodedToken = decodedToken;
      next();
      3;
    });
  } else {
    return response.status(403).json("No token provided");
  }
};
