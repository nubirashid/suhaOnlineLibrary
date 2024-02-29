import users from '../data/users.js';

const getUsers = (req,res) => {
    res.json(users);
}

export {getUsers};