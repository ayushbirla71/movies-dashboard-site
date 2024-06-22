import mongoose from "mongoose";
const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDb;
