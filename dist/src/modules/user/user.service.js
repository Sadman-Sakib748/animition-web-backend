"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const getUsers = () => user_model_1.default.find();
exports.getUsers = getUsers;
const getUserById = (id) => user_model_1.default.findById(id);
exports.getUserById = getUserById;
const updateUser = (id, data) => user_model_1.default.findByIdAndUpdate(id, data, { new: true });
exports.updateUser = updateUser;
const deleteUser = (id) => user_model_1.default.findByIdAndDelete(id);
exports.deleteUser = deleteUser;
