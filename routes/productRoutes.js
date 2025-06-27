const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validateProduct');

router.get('/', controller.getAllProducts);
router.get('/search', controller.searchProducts);
router.get('/stats', controller.getProductStats);
router.get('/:id', controller.getProductById);
router.post('/', auth, validate, controller.createProduct);
router.put('/:id', auth, validate, controller.updateProduct);
router.delete('/:id', auth, controller.deleteProduct);

module.exports = router;