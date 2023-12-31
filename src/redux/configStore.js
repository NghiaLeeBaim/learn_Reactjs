import { configureStore } from "@reduxjs/toolkit";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import arrUserReducer from "./reducers/arrUserReducer";

export const store = configureStore({
  reducer: {
    likeReducer: (state = 1, action) => {
      if (action.type === "increaseLike") {
        state += action.payload;
      }
      return state;
    },
    imgReducer: (state = "./img/black-car.jpg", action) => {
      switch (action.type) {
        case "changeIMG":
          {
            state = action.payload;
          }
          break;
      }

      return state;
    },

    fontSizeReducer: (state = 16, action) => {
      if (action.type === "changeFontSize") {
        state += action.payload;
      }
      return state;
    },

    userRegisterReducer: userRegisterReducer,

    arrUserReducer: arrUserReducer,
  },
});
