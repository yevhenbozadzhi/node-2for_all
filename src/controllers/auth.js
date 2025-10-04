import { userRegisterService } from '../services/auth.js';
import { ONE_DAY } from '../constants/index.js';
import { userLoginService } from '../services/auth.js';

export const UserRegisterController = async (req, res) => {
  const user = await userRegisterService(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const UserLoginController = async (req, res) => {
  const session = await userLoginService(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.json({
    status: 200,
    message: 'Successfully logged in!',
    data: { accessToken: session.accessToken },
  });
};
