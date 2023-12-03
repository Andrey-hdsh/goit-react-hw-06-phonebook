const filterInitialState = {
  filters: '',
};

export const setFilter = value => {
  return {
    type: 'filters',
    payload: value,
  };
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filters':
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};
