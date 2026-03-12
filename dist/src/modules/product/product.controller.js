"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProduct = exports.editProduct = exports.addProduct = exports.getAllProducts = void 0;
const product_service_1 = require("./product.service");
const getAllProducts = async (req, res) => {
    const products = await (0, product_service_1.getProducts)();
    res.json(products);
};
exports.getAllProducts = getAllProducts;
const addProduct = async (req, res) => {
    const product = await (0, product_service_1.createProduct)(req.body);
    res.json(product);
};
exports.addProduct = addProduct;
const editProduct = async (req, res) => {
    const product = await (0, product_service_1.updateProduct)(req.params.id, req.body);
    res.json(product);
};
exports.editProduct = editProduct;
const removeProduct = async (req, res) => {
    await (0, product_service_1.deleteProduct)(req.params.id);
    res.json({ message: "Product deleted" });
};
exports.removeProduct = removeProduct;
