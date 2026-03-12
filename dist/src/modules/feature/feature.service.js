"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeature = exports.updateFeature = exports.createFeature = exports.getFeatures = void 0;
const feature_model_1 = __importDefault(require("./feature.model"));
const getFeatures = () => feature_model_1.default.find();
exports.getFeatures = getFeatures;
const createFeature = (data) => feature_model_1.default.create(data);
exports.createFeature = createFeature;
const updateFeature = (id, data) => feature_model_1.default.findByIdAndUpdate(id, data, { new: true });
exports.updateFeature = updateFeature;
const deleteFeature = (id) => feature_model_1.default.findByIdAndDelete(id);
exports.deleteFeature = deleteFeature;
