import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import login from "~/services/authencation";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (params, thunkApi) => {
    // const currentUser = await userApi.getMe();
    //params là số điện thoại và password
    const currentUser = await login(params);

    return { ...currentUser, phoneNumber: currentUser.phone_number };
  }
);
const initialState = {
  current: {},
  loading: false,
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.current = {};
      state.loading = false;
      state.error = "";
    },
    register_complete: (state, action) => {
      state.current = { ...state.current, status: 'true' };
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
      console.log(action.payload)
    },
  },
});
const { reducer, actions } = userSlice;
export const logout = actions.logout;
export const register_complete = actions.register_complete;
export default reducer;
