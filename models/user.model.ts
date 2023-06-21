import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, unique: true, require: true},
    login_code: {type: String, length: 6, require: true},
    roles: {type: {
        admin: Boolean,
        seller: Boolean,
    }, require: true}
})

const userModel = model('User', userSchema, 'users')

export default userModel    