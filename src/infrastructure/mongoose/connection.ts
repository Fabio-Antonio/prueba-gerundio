import mongoose from 'mongoose';

export class MongooseConnection {
  public static async connect(bdName: string) {
    try {
      await mongoose.connect(
        `mongodb://mongoadmin:secret@localhost:27017/${bdName}?authSource=admin`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
    } catch (error) {
      console.info(error);
    }
  }
}
