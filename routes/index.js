const express = require("express");
const productController = require("../controller/productController");
const {getProducts, saveProduct, updateProduct, getProductById, deleteProduct} = productController;
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', saveProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router; 