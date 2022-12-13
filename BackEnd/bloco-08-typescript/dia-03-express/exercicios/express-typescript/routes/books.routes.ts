import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();
const booksController = new BooksController();
// import validationBook from '../middlewares/books.middleware';

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books', booksController.create);
router.put('/books/:id', booksController.update);

export default router;