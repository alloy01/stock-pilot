import {itemModel} from "../../models/items.js"
import { res_help } from "../../utils/response.js";

export const addItem = async(req,res) => {
    if(!req.body){
        return res_help(res,false,"No data provided.")
    }
    //check if req.body is empty

    const {name,desc,category,quantity,unit,costPrice,supplier,status} = req.body;

    if(!name || !category || !quantity || !costPrice || !supplier){
        return res_help(res,false,"Incomplete details.")
    }
    //check if required details are present

    try{
        const existingItem = await itemModel.findOne({name})
        if(existingItem){
            return res_help(res,false,"Item already exists.")
        }
        //check if theres already an item with the same name

        const item = new itemModel({
            name,
            desc,
            quantity,
            unit,
            category,
            costPrice,
            supplier,
            status
        })

        await item.save();
        //save the item

        return res_help(res,true,"Item added successfully.")
    }
    catch(err){
        return res_help(res,false,err.message.toString())
    }
}

export const editItem = async(req,res) => {
    if(!req.body){
        return res_help(res,false,"No data provided.")
    }
    // check if req.body is empty 

    const {name,newName,newSupplier,newQuantity,newCostPrice,newStatus,newCategory,newUnit,newDesc} = req.body;

    if(!name){
        return res_help(res,false,"Incomplete details.")
    }
    //check if details are missing

    if(!newName && !newDesc && !newCategory &&!newCostPrice && !newSupplier && !newSupplier && !newUnit){
        return res_help(res,false,"No parameter for updataion.")
    }

    try{
        const existingItem = await itemModel.findOne({name})
        if(!existingItem){
            return res_help(res,false,"Item does not exist.")
        }
        //handling the case if item does not exist

        const updatedItem = await itemModel.findOneAndUpdate({name},{
            ...(newName && {name:newName}),
            ...(newSupplier && {supplier:newSupplier}),
            ...(newQuantity && {quantity:newQuantity}),
            ...(newStatus && {status:newStatus}),
            ...(newCostPrice && {costPrice:newCostPrice}),
            ...(newCategory && {category:newCategory}),
            ...(newUnit && {unit:newUnit}),
            ...(newDesc && {desc:newDesc}),

        },{new:true});
        // update the variables whose parameters are present

        return res_help(res,true,"Item updated successfully.")
    }
    catch(err){ 
        return res_help(res,false,err.message.toString())
    }
}

export const deleteItem = async(req,res) => {
    if(!req.body){
        return res_help(res,false,"No data provided.")
    }
    //check if req.body is empty

    const {name} = req.body;

    if(!name){
        return res_help(res,false,"Incomplete details.")
    }

    try{
        const item = await itemModel.findOne({name})

        if(!item){
            return res_help(res,false,"Item does not exist.")
        }
        //handling the case if item does not exist

        await itemModel.findOneAndDelete({name})

        return res_help(res,true,"Item was deleted successfully.")
    }
    catch(err){
        return res_help(res,false,err.message.toString())
    }
}

export const filterItem = async (req,res) => {
    if(!req.body){
        return res_help(res,false,"No data provided.")
    }
    //check if req.body is empty

    const {filter,param} = req.body;
    if(!filter || !param){
        return res_help(res,false,"No filter or param provided.")
    }
    //filter is the field name, param is the value to search for (e.g., category = "medicine")

    try{
        const items = await itemModel.find({
            [filter] : param
        })
        //find the matches of filter x param

        if(items.length == 0){
            return res_help(res,false,"No matches of filter & param found.")
        }
        //handling if match not found

        return res.json({
            success:true,
            message:"Match of filter & param found.",
            payload:items
        })
    }
    catch(err){
        return res_help(res,false,err.message.toString())
    }
}