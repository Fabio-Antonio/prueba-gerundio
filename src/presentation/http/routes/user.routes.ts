import express, { Request, Response } from 'express';
import { container } from '../../../infrastructure/dependency-injection/container';
import { CreateUserController } from '../../../infrastructure/controllers/create-user.controller';
import { TYPES } from '../../../types';
import { GetAllUsersUserController } from '../../../infrastructure/controllers/get-users-Controller';
import { UpdateParcialUserController } from '../../../infrastructure/controllers/update-parcial.controller';
import { DeleteUserByEmailController } from '../../../infrastructure/controllers/delete-user-by-email.controller';
import { HttpCode } from '../../../domain/interfaces/configurations.interfaces';

const userRouter = express.Router();

// Create user router
const createUserRouter = async (req: Request, res: Response) => {
  try {
    //Create user controller instance
    const controller = container.get<CreateUserController>(
      TYPES.CreateUserController
    );
    // get status and respons from controller
    const { status, response } = await controller.run(req);
    return res.status(status).json({
      ok: true,
      msg: 'user was created',
      response,
    });
  } catch (error) {
    return res.status(HttpCode.BAD).json({
      ok: false,
      msg: 'something went wrng',
    });
  }
};

//Get all user router
const getAllUserRouter = async (req: Request, res: Response) => {
  try {
    //Get all users controller instance
    const controller = container.get<GetAllUsersUserController>(
      TYPES.GetAllUsersUserController
    );
    const { status, response } = await controller.run();
    return res.status(status).json({
      ok: true,
      response,
    });
  } catch (error) {
    return res.status(HttpCode.BAD).json({
      ok: false,
      msg: 'something went wrng',
    });
  }
};

// Update by email user info router
const updateByEmail = async (req: Request, res: Response) => {
  try {
    // Update by email controller instance
    const controller = container.get<UpdateParcialUserController>(
      TYPES.UpdateParcialUserController
    );
    const { status, response } = await controller.run(req);
    return res.status(status).json({
      ok: true,
      response,
    });
  } catch (error) {
    return res.status(HttpCode.BAD).json({
      ok: false,
      msg: 'something went wrng',
    });
  }
};

// Delete user by email router
const deleteByEmail = async (req: Request, res: Response) => {
  try {
    // Delete user by email contrller instance
    const controller = container.get<DeleteUserByEmailController>(
      TYPES.DeleteUserByEmailController
    );
    const { status, response } = await controller.run(req);
    return res.status(status).json({
      ok: true,
      response,
    });
  } catch (error) {
    return res.status(HttpCode.BAD).json({
      ok: false,
      msg: 'something went wrng',
    });
  }
};

userRouter.post('/user', createUserRouter);

userRouter.get('/user', getAllUserRouter);

userRouter.patch('/user', updateByEmail);

userRouter.delete('/user/:email', deleteByEmail);

export { userRouter };
