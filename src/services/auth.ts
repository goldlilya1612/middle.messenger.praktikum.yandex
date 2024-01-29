import AuthApi from '../api/auth';
import { TApiError } from '../utils/types/auth.type';
import { ICreateUser } from '../utils/interfaces/create-user.interface';
import router from '../utils/core/Router';
import { ILogin } from '../utils/interfaces/login.interface';
import { ERoutes } from '../utils/enums/routes.enum';

function apiHasError(response: any): response is TApiError {
  return response?.reason;
}

const authApi = new AuthApi();

const getUser = async () => {
  const responseUser = authApi.getUser();
  if (apiHasError(responseUser)) {
    throw Error(responseUser.reason);
  }

  return responseUser as any;
};

const register = async (data: ICreateUser): Promise<void> => {
  const res = await authApi.createUser(data);

  if (apiHasError(res)) {
    throw Error(res.reason);
  }

  const user = await getUser();

  window.store.set({ user });
  router.go(ERoutes.CHATS);
};

const loginUser = async (data: ILogin): Promise<void> => {
  const res = await authApi.login(data);

  if (apiHasError(res)) {
    throw Error(res.reason);
  }

  const user = await getUser();

  window.store.set({ user });
  router.go(ERoutes.CHATS);
};

const logout = async () => {
  const res = await authApi.logout();

  if (apiHasError(res)) {
    throw Error(res.reason);
  }

  window.store.set({ user: null, chats: [] });
  router.go(ERoutes.LOGIN);
};

export {
  loginUser,
  register,
  logout,
  getUser,
};
