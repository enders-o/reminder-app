let Database = [
    { 
        id : 1,
        name: "jimmy",
        email: "jimmy123@gmail.com",
        password: "ji",
        reminders: [{id: 1, title: "jimmy", description: "abcabc", completed: false, tags: "bcit", id: 2, title: "mmy234", description: "fdhgbc", completed: false, tags: "edit"}],
        friends: []
    },
    {
        id: 2,
        name: "Johnny Doe",
        email: "johnny123@gmail.com",
        password: "jo",
        reminders: [{id: 1, title: "johnny", description: "123132132", completed: false, tags: "work"}],
        friends: [1]
    },
    {
        id: 3,
        name: "cindy",
        email: "cindy@gmail.com",
        password: "c",
        reminders: [],
        friends: []
    }
]

module.exports = Database;