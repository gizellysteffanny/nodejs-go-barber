const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Welcome to the barber!" });
});

module.exports = routes;
