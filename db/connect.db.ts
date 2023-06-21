import mongoose from "mongoose"
import dotenv from 'dotenv';
import userModel from "../models/user.model";

dotenv.config()

async function connectDB() {
    if(!process.env.MONGODB_URL){
        throw new Error('Falta la variable de entorno MONGODB_URL')
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('conexion exitosa con mongodb');
        // const newUser = new userModel({
        //     firstname: 'Ezequiel',
        //     lastname: 'Ayala',
        //     email: 'ezeayala@mail.com',
        //     login_code: '112211',
        //     roles: {admin: true, seller: false}
        // })
        // console.log(newUser);
        // await newUser.save()
    } catch (error) {
        console.log('Hubo un error al conectarnos a la base de datos');
    }
}

export default connectDB