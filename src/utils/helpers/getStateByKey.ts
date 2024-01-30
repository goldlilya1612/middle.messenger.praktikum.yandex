type State = {
  // eslint-disable-next-line no-tabs
	[key: string]: State | unknown;
}

export const getStateByKey = (state: State, key: string) => {
  const keys = key.split('.');
  let current: State | unknown | undefined = state;

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (typeof current === 'object' && current !== null) {
      current = current[key as keyof typeof current];
    } else {
      current = undefined;
    }

    if (current === undefined) {
      break;
    }
  }

  return current || {};
};
