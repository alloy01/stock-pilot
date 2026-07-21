import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        default: ' '
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default: 1
    },
    unit:{
        type:String,
        required:true,
        default:"Piece"
    },
    costPrice:{
        type:Number,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Out of Stock","In Stock"],
        default:"Out of Stock"
    }
},{timeStamps:true});
//create a schema with the required attributes in it

const itemModel = mongoose.model('item',itemSchema);
//creating a models based on the schema above and the model

export {itemModel}