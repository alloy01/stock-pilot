import express from 'express';
import { addItem, deleteItem, editItem, filterItem } from '../controllers/item_controller/item_crud.js';

const item_router = express.Router();

item_router.post('/add',addItem);
item_router.post('/edit',editItem);
item_router.post('/delete',deleteItem)
item_router.post('/filter',filterItem)

export {item_router};