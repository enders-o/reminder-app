let database = require("../database");

let socialController = {
    list: (req, res) => {
        res.render("reminder/users", {database: database, user: req.user});
    },

    add: (req,res) => {
        let userToAdd = req.params.id;
        // let friendsIndex = req.user.friends;
        if (req.user && req.user.friends) {
            req.user.friends.push(Number(req.params.id));
            res.redirect("/social")
        } else {
            res.status(500).send("Error")
        }
        // console.log(req.user.friends)
    },
    
    unadd: (req, res) => {
        let userToUnAdd = req.params.id;
        let userIndex = req.user.friends.indexOf(id => {
            return id == userToUnAdd;
        });
        req.user.friends.splice(userIndex, 1);
        res.redirect("/social")
    }
}

module.exports = socialController;