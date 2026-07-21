import {itemModel} from "../models/items.js"

export const addItem = async(req,res) => {
    if(!req.body){
        return res.json({
            success:false,
            message:"No data provided."
        })
    }
    //check if req.body is empty

    const {name,desc,category,quantity,unit,costPrice,supplier,status} = req.body;

    if(!name || !category || !quantity || !costPrice || !supplier){
        return res.json({
            success:false,
            message:"Incomplete details."
        })
    }
    //check if required details are present

    try{
        const existingItem = await itemModel.findOne({name})
        if(existingItem){
            return res.json({
                success:false,
                message:'Item already exists.'
            })
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

        return res.json({
            success:true,
            message:"Item added successfully."
        })
    }
    catch(err){
        return res.json({
            success:false,
            message:err.message
    })
    }
}

export const editItem = async(req,res) => {
    if(!req.body){
        return res.json({
            success:false,
            message:"No data provided."
        })
    }
    // check if req.body is empty 

    const {name,newName,newSupplier,newQuantity,newCostPrice,newStatus,newCategory,newUnit,newDesc} = req.body;

    if(!name){
        return res.json({
            success:false,
            message:"Missing detail."
        })
    }
    //check if details are missing

    if(!newName || !newDesc || !newCategory || !newCostPrice || !newSupplier || !newSupplier || !newUnit){
        return res.json({
            success:false,
            message:"No parameter detected for updation."
        })
    }

    try{
        const existingItem = await itemModel.findOne({name})
        if(!existingItem){
            return res.json({
                success:false,
                message:'Item does not exist.'
            })
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

        return res.json({
            success:true,
            messagge:"Details updated successfully."
        })
    }
    catch(err){ 
        return res.json({
            success:false,
            message:err.message
        })
    }
}