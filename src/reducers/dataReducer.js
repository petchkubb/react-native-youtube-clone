const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD':
    return action.payload
  default:
    return state
  }
};

export default dataReducer
