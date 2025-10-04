import createHttpError from 'http-errors';
import { UserModel } from '../db/models/user.js';
import bcrypt from 'bcrypt';

export const userRegisterService = async (body) => {
  const user = await UserModel.findOne({ email: body.email });

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

    const hashPassword = await bcrypt.hash(body.password, 10);

    return await UserModel.create({ ...body, password: hashPassword });


};
