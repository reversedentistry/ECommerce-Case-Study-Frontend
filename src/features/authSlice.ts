import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
    username: string | null;
    isLoggedIn: boolean;
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AuthState = {
    username: null,
    isLoggedIn: false,
    status: "idle"
}

interface RegisterPayload {
    username: string;
    password: string
}

interface LoginPayload {
    username: string;
    password: string
}

export const registerUser = createAsyncThunk("user/register",
    async (payload: RegisterPayload) => {
        try {
            const response = await axios.post("http://localhost:3030/register", payload);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/login",
    async (payload: LoginPayload) => {
        try {
            const response = await axios.post("http://localhost:3030/login", payload);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.username = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log(action);

                if (action.payload.httpStatus) {
                    state.status = "failed";

                } else {
                    state.status = "succeeded";

                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log(action);
                state.status = "failed";

            })
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action);
                if (action.payload.httpStatus) {
                    state.status = "failed";

                } else {
                    state.status = "succeeded";
                    state.username = action.payload.username;

                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action);
                state.status = "failed";

            });

    },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;