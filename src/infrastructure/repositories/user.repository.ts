import { inject, injectable } from 'inversify';
import MongooseRepository from '../mongoose/mongoose.repository';
import { IUserDocument } from '../mongoose/schemas/user.schema';
import { Document, Model } from 'mongoose';
import { MongooseConnection } from '../mongoose/connection';
import { IUser } from '../../domain/interfaces/user.interface';

@injectable()
export class UserRepositoryImpl extends MongooseRepository<IUserDocument> {
  constructor(@inject('UserModel') userModel: Model<Document>) {
    super((userModel as unknown) as Model<IUserDocument>);
  }

  public async connectDb(bd: string): Promise<void> {
    await MongooseConnection.connect(bd);
  }

  public async getUserByEmail(email: string): Promise<IUserDocument | null> {
    try {
      const response = await this.model.findOne({ email }).exec();

      return response;
    } catch (error) {
      throw new Error(error as string | undefined);
    }
  }

  async updateByEmail(
    email: string,
    updatedData: Partial<IUser>
  ): Promise<IUserDocument | null> {
    try {
      const updatedUser = await this.model
        .findOneAndUpdate({ email }, updatedData, { new: true })
        .exec();
      return updatedUser;
    } catch (error) {
      // Handle errors, log, or throw as appropriate
      console.error('Error updating user by email:', error);
      throw error;
    }
  }

  async deleteByEmail(email: string): Promise<void> {
    try {
      await this.model.findOneAndDelete({ email }).exec();
    } catch (error) {
      // Handle errors, log, or throw as appropriate
      console.error('Error deleting user by email:', error);
      throw error;
    }
  }
}
