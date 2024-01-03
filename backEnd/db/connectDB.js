import mongoose from 'mongoose';
const { 
    MONGO_URI
} = process.env;

const connectDB = (url) => {
    return mongoose.connect(url) 
}

const connectWithRetry = () => {
    mongoose.connect(MONGO_URI)
    .then(() => console.log("Successfully connected"))
    .catch((e) => {
        console.log(e)
        setTimeout(connectWithRetry, 5000)
    });
}

export default connectDB;