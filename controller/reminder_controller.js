let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: req.user.reminders, database: database, user: req.user});
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    // console.log(req.user)
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders, database: database, user:req.user});
    }
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      tags: req.body.tags.split(" "),
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find((reminder) => {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    for (const reminder of req.user.reminders) {
      if (reminder.id == req.params.id) {
        reminder.title = req.body.title
        reminder.description = req.body.description
        reminder.tags = req.body.tags.split(" ")
        if (req.body.completed == "true") {
          reminder.completed = true
        } else {
          reminder.completed = false
        }
      }
    }
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    
    let reminderToFind = req.params.id;

    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    let reminderIndex = req.user.reminders.indexOf(searchResult)

    req.user.reminders.splice(reminderIndex, 1);
    res.redirect("/reminders");
  },
};

module.exports = remindersController;


