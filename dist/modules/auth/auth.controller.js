"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserCount = exports.updateProfile = exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../user/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_validation_1 = require("./auth.validation");
// Token create
const createToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};
// Register
const register = async (req, res) => {
    try {
        const { name, email, password } = auth_validation_1.registerSchema.parse(req.body);
        const existingUser = await user_model_1.default.findOne({ email });
        if (existingUser)
            return res.status(400).json({ success: false, message: "Email already exists" });
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await user_model_1.default.create({ name, email, password: hashedPassword, role: "user" });
        const token = createToken({ id: user._id, role: user.role });
        res.status(201).json({ success: true, user, token });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message || "Server Error" });
    }
};
exports.register = register;
// Login
const login = async (req, res) => {
    try {
        const { email, password } = auth_validation_1.loginSchema.parse(req.body);
        const user = await user_model_1.default.findOne({ email });
        if (!user)
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        const token = createToken({ id: user._id, role: user.role });
        res.status(200).json({ success: true, user, token });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message || "Server Error" });
    }
};
exports.login = login;
// Profile Update
const updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password } = req.body;
        const user = await user_model_1.default.findById(userId);
        if (!user)
            return res.status(404).json({ success: false, message: "User not found" });
        if (name)
            user.name = name;
        if (email)
            user.email = email;
        if (password)
            user.password = await bcryptjs_1.default.hash(password, 10);
        await user.save();
        res.status(200).json({ success: true, user });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message || "Server Error" });
    }
};
exports.updateProfile = updateProfile;
// Get user count
const getUserCount = async (req, res) => {
    try {
        const userCount = await user_model_1.default.countDocuments();
        res.status(200).json({ success: true, userCount });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message || "Server Error" });
    }
};
exports.getUserCount = getUserCount;
// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await user_model_1.default.find().select('-password');
        const userCount = users.length;
        res.status(200).json({
            success: true,
            users,
            userCount
        });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message || "Server Error" });
    }
};
exports.getAllUsers = getAllUsers;
