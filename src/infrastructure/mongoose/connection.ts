import mongoose from 'mongoose';

// Connection to mongodb class (only for locall)
export class MongooseConnection {
  public static async connect(bdName: string) {
    try {
      await mongoose.connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/${bdName}?authSource=admin`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
    } catch (error) {
      console.info(error);
    }
  }
}
