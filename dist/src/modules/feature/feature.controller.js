"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFeature = exports.editFeature = exports.addFeature = exports.getAllFeatures = void 0;
const feature_service_1 = require("./feature.service");
const getAllFeatures = async (req, res) => {
    const features = await (0, feature_service_1.getFeatures)();
    res.json(features);
};
exports.getAllFeatures = getAllFeatures;
const addFeature = async (req, res) => {
    const feature = await (0, feature_service_1.createFeature)(req.body);
    res.json(feature);
};
exports.addFeature = addFeature;
const editFeature = async (req, res) => {
    const feature = await (0, feature_service_1.updateFeature)(req.params.id, req.body);
    res.json(feature);
};
exports.editFeature = editFeature;
const removeFeature = async (req, res) => {
    await (0, feature_service_1.deleteFeature)(req.params.id);
    res.json({ message: "Feature deleted" });
};
exports.removeFeature = removeFeature;
