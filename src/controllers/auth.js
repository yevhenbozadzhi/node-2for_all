import { userRegisterService } from '../services/auth.js';

export const UserRegisterController = async (req, res) => {
  const user = await userRegisterService(req.body);

  res
    .status(201)
    .json({
      status: 201,
      message: 'Successfully registered a user!',
      data: user,
    });
};

export const UserLoginController = async (req, res)
