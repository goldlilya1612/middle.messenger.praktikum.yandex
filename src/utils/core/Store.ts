import { AppState } from '../types/app-state.type';
import { EventBus } from './EventBus';
import set from '../helpers/set';
import { getStateByKey } from '../helpers/getStateByKey';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private _state: AppState = {} as AppState;

  static _instance: Store;

  static STORE_NAME = 'store';

  constructor() {
    if (Store._instance) {
      // eslint-disable-next-line no-constructor-return
      return Store._instance;
    }

    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);
    this._state = savedState ? (JSON.parse(savedState) ?? {}) : {};

    Store._instance = this;

    this.on(StoreEvents.Updated, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
    });
  }

  getState(key?: string): AppState {
    if (!key) {
      return this._state;
    }

    return getStateByKey(this._state, key) as AppState;
  }

  set(key: string, value: unknown, mutable?: boolean) {
    set(this._state, key, value, mutable);

    try {
      this.emit(StoreEvents.Updated);
    } catch (error) {
      console.error(error);
    }

    return this;
  }

  removeState() {
    this._state = {} as AppState;
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
