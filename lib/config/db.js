import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://praveenbimsara99:<praveen99@todo>@cluster0.hpuom.mongodb.net/todo-app');
    console.log('DB Connected');
}