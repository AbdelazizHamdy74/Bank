const adminRoutes = require("express").Router();
const adminController = require("../controllers/bankAccount");
const middleWares = require("../middlewares/auth");

adminRoutes.post("/b", adminController.add1);
adminRoutes.put("/w/:id", adminController.withdrow);
adminRoutes.put("/d/:id", adminController.deposite);
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
