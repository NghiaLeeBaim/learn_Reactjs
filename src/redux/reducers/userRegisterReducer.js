const initialState = { email: "", name: "", password: "" };

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_FORM":
      const { id, value } = action.payload;

      let newState = { ...state };
      // imutable  (Bất biến)
      newState[id] = value;
      // cập nhập state
      state = newState;
    default:
      return state;
  }
  return state;
};
