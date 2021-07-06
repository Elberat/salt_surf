import axios from "axios";
import { Dispatch } from "redux";
import { UsersAction, UsersActionTypes } from "../types/userTypes";
import { $authHost } from "./host";

//Sign up action creators
const signUpRequest = () => {
    return {
        type: UsersActionTypes.SIGN_UP_REQUEST,
    };
};
const signUpSuccess = (user: any) => {
    return {
        type: UsersActionTypes.SIGN_UP_SUCCESS,
        payload: {
            user,
        },
    };
};
const signUpFailure = (error: string) => {
    return {
        type: UsersActionTypes.SIGN_UP_FAILURE,
        payload: error,
    };
};

export const signUp = (user: {}, history: any) => {
    return function (dispatch: any) {
        dispatch(signUpRequest());
        console.log(user);
        axios({
            method: "POST",
            url: "http://localhost:5000/api/user/registration",
            data: user,
        })
            .then((response) => {
                console.log(response);
                const { data } = response.data;
                const { token } = response.data;
                localStorage.setItem("USER-TOKEN", token);
                dispatch(signUpSuccess(data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(signUpFailure(error));
            });
    };
};

//Sign in action creators
const signInRequest = () => {
    return {
        type: UsersActionTypes.SIGN_IN_REQUEST,
    };
};
const signInSuccess = (token: any) => {
    return {
        type: UsersActionTypes.SIGN_IN_SUCCESS,
        payload: {
            token,
        },
    };
};
const signInFailure = (error: any) => {
    return {
        type: UsersActionTypes.SIGN_IN_ERROR,
        payload: error,
    };
};

export const signIn = (payload: any, history: any) => {
    return function (dispatch: any) {
        dispatch(signInRequest);
        axios({
            method: "POST",
            url: "http://localhost:5000/api/user/login",
            data: payload,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
            },
        })
            .then((response) => {
                const { token } = response.data;
                localStorage.setItem("USER-TOKEN", token);
                dispatch(signInSuccess(token));
            })
            .catch((error) => {
                dispatch(signInFailure(error));
            });
    };
};

//sign out action creators
export const signOutRequest = function () {
    return {
        type: UsersActionTypes.SIGN_OUT_REQUEST,
    };
};

export const signOutSuccess = function () {
    return {
        type: UsersActionTypes.SIGN_OUT_SUCCESS,
    };
};

export const signOutFailure = function () {
    return {
        type: UsersActionTypes.SIGN_OUT_FAILURE,
    };
};

export const signOut = function (history: any) {
    return function (dispatch: any) {
        dispatch(signOutRequest());
        localStorage.clear();
        if (localStorage.getItem("USER-TOKEN")) {
            dispatch(signOutFailure());
        } else {
            dispatch(signOutSuccess());
        }
    };
};

export const check = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await $authHost.get("api/user/auth");
            localStorage.setItem("USER-TOKEN", response.data.token);
            if (response.data.token) {
                dispatch({
                    type: UsersActionTypes.SIGN_CHECK_SUCCESS,
                    payload: true,
                });
                dispatch({
                    type: UsersActionTypes.SIGN_CHECK_FAILURE,
                    payload: response.data.user,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
};
