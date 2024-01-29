import Block from '../core/Block';

export const renderComponent = (query: string, component: Block) => {
  const root = document.getElementById(query);

  if (root) {
    root.innerHTML = '';
    root.appendChild(component.getContent()!);
  }

  component.dispatchComponentDidMount();

  return root;
};
