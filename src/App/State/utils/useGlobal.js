import React from 'react';

export function setState(newState) {
  this.state = { ...this.state, ...newState };
  this.listeners.forEach((listener) => {
    listener(this.state);
  });
}

export function useCustom() {
  const newListener = React.useState()[1];

  React.useEffect(() => {
    this.listeners.push(newListener);
    return () => {
      this.listeners = this.listeners.filter((listener) => listener !== newListener);
    };
  }, []);

  return [this.state, this.actions];
}

export function associateActions(store, actions = {}) {
  const associatedActions = {};

  Object.keys(actions).forEach((key) => {
    if (typeof actions[key] === 'function') {
      associatedActions[key] = actions[key].bind(null, store);
    }
  });
  return associatedActions;
}

const useGlobal = (initialState, actions) => {
  const store = { state: initialState, listeners: [] };
  store.setState = setState.bind(store);
  store.actions = associateActions(store, actions);
  return useCustom.bind(store);
};

export default useGlobal;
