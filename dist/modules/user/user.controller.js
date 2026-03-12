"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.editUser = exports.getSingleUser = exports.getAllUsers = void 0;
const user_service_1 = require("./user.service");
const getAllUsers = async (req, res) => {
    const users = await (0, user_service_1.getUsers)();
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getSingleUser = async (req, res) => {
    const user = await (0, user_service_1.getUserById)(req.params.id);
    res.json(user);
};
exports.getSingleUser = getSingleUser;
const editUser = async (req, res) => {
    const user = await (0, user_service_1.updateUser)(req.params.id, req.body);
    res.json(user);
};
exports.editUser = editUser;
const removeUser = async (req, res) => {
    await (0, user_service_1.deleteUser)(req.params.id);
    res.json({ message: "User deleted" });
};
exports.removeUser = removeUser;
