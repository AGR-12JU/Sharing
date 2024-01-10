import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    
    
    const MONGO_URI=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@file-sharing.djyqlm4.mongodb.net/?retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;