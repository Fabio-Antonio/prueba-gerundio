import { injectable } from 'inversify';
import * as mongoose from 'mongoose';

@injectable()
 abstract class MongooseRepository <T extends mongoose.Document> {
  protected model: mongoose.Model<T>;

  constructor(model:mongoose.Model<T>){
   this.model= model
  }


  public async getAll():Promise<T[]> {
    try {
   
      const result = await this.model
        .find()
        .exec()

      return result;
    } catch (error) {
      throw new Error(error as string | undefined);
    }
  }

  public async register(entity: T):Promise<T> {
    try {
      return await this.model.create(entity);
    } catch (error) {
      throw new Error(error as string | undefined);
    }
  }

  public async findOne( params: any) {
    try {
      const result = await this.model.findOne({ ...params }).exec();

      if (!result) return null;

      return result;
    } catch (error) {
      throw new Error(error as string | undefined);
    }
  }

  public async remove(id: string,) {
    try {
      const result = await this.model
        .findByIdAndDelete(id).exec();

      if (!result) return null;

      return true;
    } catch (error) {
      throw new Error(error as string | undefined);
    }
  }

  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
}

export default MongooseRepository