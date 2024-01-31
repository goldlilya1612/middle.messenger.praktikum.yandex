import store, { StoreEvents } from '../core/Store';
import Block, { BlockProps } from '../core/Block';
import { AppState } from '../types/app-state.type';
import { isDeepEqual } from './isDeepEqual';

export const connect = <T extends BlockProps = Record<string, never>>(Component: typeof Block, mapStateToProps?: ((state: AppState, props: T) => T)) => class extends Component {
  constructor(props = {} as T) {
    const state = mapStateToProps ? mapStateToProps(store.getState(), props) : store.getState();

    super({ ...props, ...state });

    store.on(StoreEvents.Updated, () => {
      const newState = mapStateToProps ? mapStateToProps(store.getState(), props) : store.getState();

      if (!isDeepEqual(state, newState)) {
        this.setProps({
          ...newState,
        });
      }
    });
  }
} as unknown as typeof Block;
