import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
});

const Category =  mongoose.model('categories',categorySchema);
export default Category;