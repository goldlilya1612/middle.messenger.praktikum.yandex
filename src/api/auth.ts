import { FetchCopy } from '../utils/core/FetchCopy';
import { TApiError, TSignUpResponse, TUserDTO } from '../utils/types/auth.type';
import { ICreateUser } from '../utils/interfaces/create-user.interface';
import { ILogin } from '../utils/interfaces/login.interface';

const authApi = new FetchCopy('/auth');

export default class AuthApi {
  async createUser(data: ICreateUser): Promise<TSignUpResponse | TApiError> {
    return authApi.post<TSignUpResponse>('/signup', { data });
  }

  async login(data: ILogin): Promise<TSignUpResponse | TApiError> {
    return authApi.post<TSignUpResponse>('/signin', { data });
  }

  async logout(): Promise<TSignUpResponse | TApiError> {
    return authApi.post<TSignUpResponse>('/logout');
  }

  async getUser(): Promise<TUserDTO | TApiError> {
    return authApi.get('/user');
  }
}
