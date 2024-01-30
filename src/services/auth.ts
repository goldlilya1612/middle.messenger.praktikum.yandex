import AuthApi from '../api/auth';
import { ICreateUser } from '../utils/interfaces/create-user.interface';
import router from '../utils/core/Router';
import { ILogin } from '../utils/interfaces/login.interface';
import { ERoutes } from '../utils/enums/routes.enum';
import store from '../utils/core/Store';

const authApi = new AuthApi();

const getUser = async () => {
  try {
    store.set('loading', true);
    store.set('error', null);

    const user = await authApi.getUser();
    store.set('user', user);
  } catch (error) {
    store.set('error', error);
  } finally {
    store.set('loading', false);
  }
};
const register = async (data: ICreateUser): Promise<void> => {
  await authApi.createUser(data);
  await getUser();

  router.go(ERoutes.CHATS);
};

const loginUser = async (data: ILogin): Promise<void> => {
  try {
    store.set('error', null);
    store.set('loading', true);

    await authApi.login(data);
    await getUser();

    router.go(ERoutes.CHATS);
  } catch (error) {
    store.set('error', error);
  } finally {
    store.set('loading', false);
  }
};

const logout = async () => {
  try {
    await authApi.logout();
    localStorage.removeItem('store');
    router.go(ERoutes.LOGIN);
  } catch (error) {
    store.set('error', error);
  } finally {
    store.set('loading', false);
  }
};

export {
  loginUser,
  register,
  logout,
  getUser,
};
