import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    importance:{
        type: Boolean,
        required: true
    }
});

const Role =  mongoose.model('roles', roleSchema);
export default Role;