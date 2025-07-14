import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage or sessionStorage
const userTokenSetLocalStorage = () => {
  const roleLocal = localStorage.getItem("role");
  const tokenLocal = localStorage.getItem("token");

  const roleSession = sessionStorage.getItem("role");
  const tokenSession = sessionStorage.getItem("token");

  try {
    const role = roleLocal || roleSession;
    const token = tokenLocal || tokenSession;

    return {
      role: role ? JSON.parse(role) : null,
      token: token ? JSON.parse(token) : null,
    };
  } catch (e) {
    console.error("Error parsing stored role/token:", e);
    return {
      role: null,
      token: null,
    };
  }
};

const initialState = userTokenSetLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUserRole: (state, action) => {
      const { role, token } = action.payload;

      state.role = role;
      state.token = token;

      localStorage.setItem("role", JSON.stringify(role));
      localStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("role", JSON.stringify(role));
      sessionStorage.setItem("token", JSON.stringify(token));
    },

    Logout: (state) => {
      state.role = null;
      state.token = null;

      localStorage.removeItem("role");
      localStorage.removeItem("token");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("token");
    },
  },
});

export const { setUserRole, Logout } = authSlice.actions;
export default authSlice.reducer;
