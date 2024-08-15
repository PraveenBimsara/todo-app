import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://praveenbimsara99:todo@nextapp@cluster0.axkfs.mongodb.net/todo-app');
    console.log('DB Connected');
}