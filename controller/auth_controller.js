let database = require("../database");
const passport = require("../middleware/passport");
const userController = require("./userController").userModel;

let authController = {
  login: (req, res) => {
    
    // console.log(req.body);
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement 
      passport.authenticate("local", {
        successRedirect: "/reminder",
        failureRedirect: "/login",
      })
    // console.log(req);
    // res.redirect("/reminders")
  },

  registerSubmit: (req, res) => {
    //
    return;
  }
};

module.exports = authController;
