import { getUser } from './auth';

export const initApp = async () => {
  try {
    const user = await getUser();
    window.store.set({ user });
    // router.go(ERoutes.CHATS);
  } catch (error) {
    // router.go(ERoutes.LOGIN);
  }
};
