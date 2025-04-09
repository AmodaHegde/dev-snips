import express from 'express';

import {
    createSnippet, getAllSnippets, getMySnippets, getSnippetById, updateSnippet, deleteSnippet, 
} from '../controllers/snippetController.js';

import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/public', getAllSnippets); 
router.use(protect);       
router.post('/', createSnippet);                  
router.get('/mine', getMySnippets);               
router.get('/:id', getSnippetById);
router.put('/:id', updateSnippet);
router.delete('/:id', deleteSnippet);

export default router;