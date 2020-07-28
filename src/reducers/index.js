const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD':
    return action.payload
  default:
    return state
  }
};
