"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersFromDB = exports.getTotalUserCount = exports.loginUser = exports.registerUser = void 0;
const user_model_1 = __importDefault(require("../user/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const global_1 = require("../../types/global");
const registerUser = async (name, email, password) => {
    const hash = await bcrypt_1.default.hash(password, 10);
    const user = await user_model_1.default.create({ name, email, password: hash });
    return user;
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user)
        throw new Error("No user found");
    const valid = await bcrypt_1.default.compare(password, user.password);
    if (!valid)
        throw new Error("Invalid password");
    const token = (0, global_1.createToken)({ id: user._id, role: user.role });
    return { token, user };
};
exports.loginUser = loginUser;
const getTotalUserCount = async () => {
    return await user_model_1.default.countDocuments();
};
exports.getTotalUserCount = getTotalUserCount;
const getAllUsersFromDB = async () => {
    return await user_model_1.default.find().select('-password');
};
exports.getAllUsersFromDB = getAllUsersFromDB;
