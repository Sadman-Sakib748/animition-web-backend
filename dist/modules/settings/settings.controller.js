"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSettings = exports.editSettings = exports.addSettings = exports.getSettingsByIdController = exports.getDefaultSettingsController = exports.getAllSettingsController = void 0;
const settings_service_1 = require("./settings.service");
const getAllSettingsController = async (req, res) => {
    try {
        const settings = await (0, settings_service_1.getAllSettings)();
        res.status(200).json({
            success: true,
            count: settings.length,
            data: settings
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.getAllSettingsController = getAllSettingsController;
const getDefaultSettingsController = async (req, res) => {
    try {
        const settings = await (0, settings_service_1.getDefaultSettings)();
        if (!settings) {
            return res.status(404).json({
                success: false,
                message: "No settings found"
            });
        }
        res.status(200).json({
            success: true,
            data: settings
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.getDefaultSettingsController = getDefaultSettingsController;
const getSettingsByIdController = async (req, res) => {
    try {
        const settings = await (0, settings_service_1.getSettingsById)(req.params.id);
        if (!settings) {
            return res.status(404).json({
                success: false,
                message: "Settings not found"
            });
        }
        res.status(200).json({
            success: true,
            data: settings
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.getSettingsByIdController = getSettingsByIdController;
const addSettings = async (req, res) => {
    try {
        const { siteName, logo, theme, contactEmail } = req.body;
        // ভ্যালিডেশন
        if (!siteName || !logo || !contactEmail) {
            return res.status(400).json({
                success: false,
                message: "siteName, logo and contactEmail are required"
            });
        }
        const settings = await (0, settings_service_1.createSettings)(req.body);
        res.status(201).json({
            success: true,
            message: "Settings created successfully",
            data: settings
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.addSettings = addSettings;
const editSettings = async (req, res) => {
    try {
        const settings = await (0, settings_service_1.updateSettings)(req.params.id, req.body);
        if (!settings) {
            return res.status(404).json({
                success: false,
                message: "Settings not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Settings updated successfully",
            data: settings
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.editSettings = editSettings;
const removeSettings = async (req, res) => {
    try {
        const settings = await (0, settings_service_1.deleteSettings)(req.params.id);
        if (!settings) {
            return res.status(404).json({
                success: false,
                message: "Settings not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Settings deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.removeSettings = removeSettings;
