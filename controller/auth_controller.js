let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    let reminderToFind = req.params.id;
    console.log(reminderToFind)
    //database.cindy.reminders.remove(reminderToFind)
    res.redirect("/reminders");
  },
};

module.exports = authController;
