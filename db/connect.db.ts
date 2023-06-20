import mongoose from "mongoose";

async function connectDB() {
    if(!process.env.MONGODB_URL){
        throw new Error('Falta la variable de entorno MONDODB_URL')
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('conexion exitosa con mongodb');
    } catch (error) {
        console.log('Hubo un error al conectarnos a la base de datos');
    }
}

export default connectDB