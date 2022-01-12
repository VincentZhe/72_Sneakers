const express = require("express");
const exphbs = require("express-handlebars");
var app = express();
// var path = require("path");
// var dataModule = require("./modules/shoesData.js");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      navLink: function (url, options) {
        return (
          "<li" +
          (url == app.locals.activeRoute
            ? ' class="nav-item active" '
            : ' class="nav-item" ') +
          '><a class="nav-link" href="' +
          url +
          '">' +
          options.fn(this) +
          "</a></li>"
        );
      },
      equal: function (lvalue, rvalue, options) {
        if (arguments.length < 3)
          throw new Error("Handlebars Helper equal needs 2 parameters");
        if (lvalue != rvalue) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      },
    },
  })
);
app.set("view engine", ".hbs");

app.use(function (req, res, next) {
  let route = req.baseUrl + req.path;
  app.locals.activeRoute = route == "/" ? "/" : route.replace(/\/$/, "");
  next();
});

var HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/Shoes", (req, res) => {
  res.render("Shoes");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/signUp", (req, res) => {
  res.render("signUp");
});

app.listen(HTTP_PORT, () => {
  console.log("server listening on port: " + HTTP_PORT);
});
