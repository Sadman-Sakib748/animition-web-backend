"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSettings = exports.updateSettings = exports.createSettings = exports.getSettingsById = exports.getDefaultSettings = exports.getAllSettings = void 0;
const settings_model_1 = __importDefault(require("./settings.model"));
const getAllSettings = () => settings_model_1.default.find();
exports.getAllSettings = getAllSettings;
const getDefaultSettings = () => settings_model_1.default.findOne();
exports.getDefaultSettings = getDefaultSettings;
const getSettingsById = (id) => settings_model_1.default.findById(id);
exports.getSettingsById = getSettingsById;
const createSettings = (data) => settings_model_1.default.create(data);
exports.createSettings = createSettings;
const updateSettings = (id, data) => settings_model_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
exports.updateSettings = updateSettings;
const deleteSettings = (id) => settings_model_1.default.findByIdAndDelete(id);
exports.deleteSettings = deleteSettings;
