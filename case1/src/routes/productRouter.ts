import express from "express";

import { ProductBusiness } from "../business/productBusiness";
import { ProductController } from "../controller/productController";

import { ProductDatabase } from "../data/productDatabase";


export const productRouter = express.Router();

const productDatabase = new ProductDatabase()
const productBusiness = new ProductBusiness(productDatabase)
const productController = new ProductController(productBusiness)


productRouter.post("/create", (req, res) => productController.createProductController(req, res))
productRouter.get("/:id", (req, res) => productController.productByIdController(req, res))
//productRouter.post("/insert", (req, res) => productController.insertProductController(req, res))