const { v4: uuidv4 } = require('uuid');
const { NotFoundError } = require('../utils/customErrors');

let products = [
  {
    id: '1',
    name: 'Laptop',
    description: '16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smartphone',
    description: '128GB Storage',
    price: 800,
    category: 'electronics',
    inStock: true,
  },
];

exports.getAllProducts = (req, res) => {
  const { category, page = 1, limit = 5 } = req.query;
  let result = [...products];

  if (category) {
    result = result.filter(p => p.category === category);
  }

  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + Number(limit));
  res.json({ total: result.length, page: Number(page), data: paginated });
};

exports.getProductById = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError());
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError());
  products[index] = { ...products[index], ...req.body, id: products[index].id };
  res.json(products[index]);
};

exports.deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError());
  const deleted = products.splice(index, 1);
  res.json({ message: 'Deleted', product: deleted[0] });
};

exports.searchProducts = (req, res) => {
  const { q } = req.query;
  const result = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  res.json(result);
};

exports.getProductStats = (req, res) => {
  const stats = {};
  for (const p of products) {
    stats[p.category] = (stats[p.category] || 0) + 1;
  }
  res.json(stats);
};
