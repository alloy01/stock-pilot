import express from 'express';
import { addItem, deleteItem, editItem, filterItem, getRecentDocument } from '../controllers/item_controller/item_crud.js';
import { userAuth } from '../middlewares/auth_mw.js';

const item_router = express.Router();

item_router.post('/add', userAuth, addItem);
item_router.post('/edit', userAuth, editItem);
item_router.post('/delete', userAuth, deleteItem);
item_router.post('/filter', userAuth, filterItem);
item_router.get('/fetch-docs', userAuth, getRecentDocument);

export {item_router};