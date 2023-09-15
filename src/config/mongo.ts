import mongoose from 'mongoose';

const stringConnection = process.env.MONGO_URI || 'mongodb://localhost:27017/stock_api_alternative_db';

/**
 * Connect to MongoDB
 */
const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(stringConnection)
        console.log(`\n ### Connected to MongoDB: ${stringConnection} ###`)
    } catch (error) {
        console.log('XXX Error during connection to MongoDB: ', error)
    }
}

export default connectDB;