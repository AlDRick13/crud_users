const userControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers();
    res.status(200).json(data);
};

const getUserById = (req, res) => {
    const id = req.params.id;
    const data = userControllers.findUsersById(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: 'Invalid ID' });
    }
};

const postNewUser = (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    if (first_name && last_name && email && password) {
        const data = userControllers.createNewUser({ first_name, last_name, email, password });
        res.status(201).json(data);
    } else {
        res.status(404).json({
            message: 'Invalid data',
            fields: {
                first_name: 'string',
                last_name: 'string',
                email: 'string',
                password: 'string'
            }
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
};