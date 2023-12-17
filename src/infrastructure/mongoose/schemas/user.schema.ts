import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../../../domain/interfaces/user.interface';

export interface IUserDocument extends Document, IUser {
  creationDate?: string;
  deleteDate?: string;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
    required: true,
    default: new Date().toLocaleDateString('es-MX'),
  },
  deleteDate: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model<IUserDocument>('user', userSchema);

export default UserModel;
