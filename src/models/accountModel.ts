import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "roles"
    }
});

const Account =  mongoose.model('accounts', accountSchema);
export default Account;