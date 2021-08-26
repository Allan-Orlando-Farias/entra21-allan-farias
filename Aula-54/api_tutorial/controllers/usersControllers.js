function getAllUsers(req, res, next) {
    res.json(users);
}

function getUserById(req, res, next) {}

module.exports = {
    getAllUsers,
    getUserById
};