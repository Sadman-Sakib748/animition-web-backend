"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    image: zod_1.z.string().url(),
    price: zod_1.z.number().positive(),
    description: zod_1.z.string().min(10)
});
