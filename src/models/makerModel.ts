import mongoose from "mongoose";

const makerSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    }
});

const Maker =  mongoose.model('makers', makerSchema);
export default Maker;