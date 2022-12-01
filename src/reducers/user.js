export const initialState = {
  logged: false,
  email: 'email du state',
  password: 'password du state',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;