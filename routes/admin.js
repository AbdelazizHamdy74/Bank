const adminRoutes = require("express").Router();
const adminController = require("../controllers/admin");
const middleWares = require("../middlewares/auth");

adminRoutes.post("/", adminController.add);
adminRoutes.post("/login", adminController.login);
// adminRoutes.put('',middleWares.checkAuth,adminController)
// adminRoutes.delete("", middleWares.checkAuth, adminController);
adminRoutes.get(
  "",
  (request, response, next) => {
    console.log("first middleWare");

    next();
  },
  (request, response) => {
    console.log("second middleWare");

    response.status(200).json("finished");
  }
);

module.exports = adminRoutes;
