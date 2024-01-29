import Block from './Block';
import { renderComponent } from '../helpers/render';

class Route {
  private _pathname: string;

  private readonly _blockClass: typeof Block;

  private _block: null | Block;

  private _props: {
    rootQuery: string;
  };

  constructor(pathname: string, view: typeof Block, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  public match(pathname: string) {
    return pathname === this._pathname;
  }

  public render() {
    if (!this._block) {
      this._block = new this._blockClass({});
      renderComponent(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export default Route;
