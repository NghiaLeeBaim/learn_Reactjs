const initialState = [
  { email: "abc@gmail.com", name: "abc", password: "123" },
  { email: "xyz@gmail.com", name: "xyz", password: "123" },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_FORM": {
      const values = { ...action.payload };

      // clone arrState ra
      let newArrUser = [...state, values];

      // newArrUser.push(values);
      state = newArrUser;
      return state;
    }

    case 'DEL_USER':{
        let newState=[...state];
        newState= newState.filter(item=>item.email !== action.payload);
        return newState;
    }

    default:
      return state;
  }
};
