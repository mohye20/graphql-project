import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_STRING)
    .then(() => {
      console.log("Establish Connect DB...");
    })
    .catch((err) => {
      console.log("Error To Connect DB!", err.message);
    });
};

export default dbConnection;
