import express, { Request, Response } from 'express';
import { container } from '../../../infrastructure/dependency-injection/container';
import { CreateUserController } from '../../../infrastructure/controllers/create-user.controller';
import { TYPES } from '../../../types';
import { GetAllUsersUserController } from '../../../infrastructure/controllers/get-users-Controller';
import { UpdateParcialUserController } from '../../../infrastructure/controllers/update-parcial.controller';
import { DeleteUserByEmailController } from '../../../infrastructure/controllers/delete-user-by-email.controller';

const userRouter = express.Router();

const createUserRouter = async (req: Request, res: Response) => {
  const controller = container.get<CreateUserController>(
    TYPES.CreateUserController
  );
  const { status, response } = await controller.run(req);
  return res.status(status).json({
    ok: true,
    msg: 'user was created',
    response,
  });
};

const getAllUserRouter = async (req: Request, res: Response) => {
  const controller = container.get<GetAllUsersUserController>(
    TYPES.GetAllUsersUserController
  );
  const { status, response } = await controller.run();
  return res.status(status).json({
    ok: true,
    response,
  });
};

const updateByEmail = async (req: Request,res:Response)=>{
  const controller = container.get<UpdateParcialUserController>(
    TYPES.UpdateParcialUserController
  );
  const { status, response } = await controller.run(req);
  return res.status(status).json({
    ok: true,
    response,
  });
}

const deleteByEmail = async (req: Request, res: Response) => {
  const controller = container.get<DeleteUserByEmailController>(
    TYPES.DeleteUserByEmailController
  );
  const { status, response } = await controller.run(req);
  return res.status(status).json({
    ok: true,
    response,
  });
};


userRouter.post('/user', createUserRouter);

userRouter.get('/user', getAllUserRouter);

userRouter.patch('/user', updateByEmail)

userRouter.delete('/user/:email',deleteByEmail)

export { userRouter };
