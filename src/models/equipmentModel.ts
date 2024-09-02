import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: Object,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    maker: {
        type: String,
        required: false
    }
});

const Equipment =  mongoose.model('equipments', equipmentSchema);
export default Equipment;