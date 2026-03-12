"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProducts = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const getProducts = () => product_model_1.default.find();
exports.getProducts = getProducts;
const createProduct = (data) => product_model_1.default.create(data);
exports.createProduct = createProduct;
const updateProduct = (id, data) => product_model_1.default.findByIdAndUpdate(id, data, { new: true });
exports.updateProduct = updateProduct;
const deleteProduct = (id) => product_model_1.default.findByIdAndDelete(id);
exports.deleteProduct = deleteProduct;
