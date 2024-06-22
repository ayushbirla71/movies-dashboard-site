import express from 'express';
import { createMovie } from '../controllers/movie.controller.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/add', createMovie);


router.put('/', (req, res) => {
  res.send('Hello World');
});

router.delete('/', (req, res) => {
  res.send('Hello World');
});

export default router;