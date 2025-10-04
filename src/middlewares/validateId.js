import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  if (!isValidObjectId(req.params.productId)) {
    throw createHttpError(400, 'Id is not valid');
  }
  next();
};
