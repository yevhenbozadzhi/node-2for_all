import createHttpError from 'http-errors';
import { UserModel } from '../db/models/user.js';
import bcrypt from 'bcrypt';
import { SessionModel } from '../db/models/session.js';
import { FIFTEEN_MINUTES, THIRTY_DAYS } from '../constants/index.js';
import { randomBytes } from 'crypto';

export const userRegisterService = async (body) => {
  const user = await UserModel.findOne({ email: body.email });

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(body.password, 10);

  return await UserModel.create({ ...body, password: hashPassword });
};

export const userLoginService = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw createHttpError(401, 'Email or password is wrong');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw createHttpError(401, 'Email or password is wrong');
  }

  await SessionModel.deleteOne({ userId: user._id });
  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await SessionModel.create({
    userId: user._id,
    accessToken,
    refreshToken,

    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS),
  });
};
