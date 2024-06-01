import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "hospitalmanagement",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error occured while connecting to database", error);
    });
};

//mFlWxQPyvn7K5Lia
