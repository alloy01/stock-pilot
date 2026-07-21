import express from 'express';
import { addItem, editItem } from '../controllers/item_crud.js';

const item_router = express.Router();

item_router.post('/add',addItem);
item_router.post('/edit',editItem);

export {item_router};