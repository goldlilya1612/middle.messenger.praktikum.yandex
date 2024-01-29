import { EventBus } from './EventBus';

export enum EStoreEvents {
  Updated = 'updated'
}

export class Store<State extends Record<string, any>> extends EventBus {
  private _state: State = {} as State;

  static STORE_NAME = 'globalStore';

  constructor(defaultState: State) {
    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);
    this._state = savedState ? (JSON.parse(savedState) ?? {}) : defaultState;

    this.on(EStoreEvents.Updated, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
    });
  }

  public getState() {
    return this._state;
  }

  public set(nextState: Partial<State>) {
    const prevState = { ...this._state };

    this._state = { ...this._state, ...nextState };

    this.emit(EStoreEvents.Updated, prevState, nextState);
  }
}
