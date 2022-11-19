import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (req, res) => {
  res.send('Ok');
});

// Create product
router.post('/products', (req, res) => {
  res.send('Ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('Ok');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('Ok');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});
