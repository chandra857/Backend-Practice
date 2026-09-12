const userRepository = require('../repositories/user.repository')

// GET all users
const getUsers = () => {

    return userRepository.getUsers();

};


// GET one user
const getUserById = (id) => {

    return userRepository.getUserById(id);
   
};


// POST - create user
const createUser = (name, email) => {

    return  userRepository.createUser(name,email);
};


// PUT - update user
const updateUser = (id, name, email) => {

    const result = db.prepare(`
        UPDATE users
        SET name = ?, email = ?
        WHERE id = ?
    `).run(name, email, id);

    return result.changes;
};


// DELETE - delete user
const deleteUser = (id) => {

    const result = db.prepare(`
        DELETE FROM users
        WHERE id = ?
    `).run(id);

    return result.changes;
};


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};