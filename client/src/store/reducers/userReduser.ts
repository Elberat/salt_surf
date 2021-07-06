import jwtDecode from "jwt-decode";
import { UsersAction, UsersActionTypes, AuthState } from "../types/userTypes";

export const isValidToken = (token: any): any => {
    let decoded: any = jwtDecode(token);
    return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
};
const initState: AuthState = {
    currentUser: localStorage.getItem("USER-TOKEN")
        ? isValidToken(localStorage.getItem("USER-TOKEN"))
        : "",
    token: localStorage.getItem("USER-TOKEN")
        ? localStorage.getItem("USER-TOKEN")
        : "",
    error: "",
    loading: false,
    isAuthenticated: false,
    isAuth: false,
};

const authReducer = function (
    state = initState,
    action: UsersAction
): AuthState {
    switch (action.type) {
        case UsersActionTypes.SIGN_IN_REQUEST:
        case UsersActionTypes.SIGN_UP_REQUEST:
        case UsersActionTypes.SIGN_OUT_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            };
        case UsersActionTypes.SIGN_IN_ERROR:
        case UsersActionTypes.SIGN_UP_FAILURE:
        case UsersActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                currentUser: null,
                isAuthenticated: false,
            };
        case UsersActionTypes.SIGN_UP_SUCCESS:
        case UsersActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                currentUser: true ,
                isAuthenticated: true,
            };
        case UsersActionTypes.SIGN_OUT_SUCCESS:
            localStorage.removeItem("USER-TOKEN");
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                currentUser: null,
                token: "",
            };
        case UsersActionTypes.SIGN_CHECK_SUCCESS:
            return { ...state, isAuth: true };
        case UsersActionTypes.SIGN_CHECK_FAILURE:
            return {
                ...state,
                error: "There was an error confirming your authentication",
            };
        default:
            return { ...state };
    }
};

export default authReducer;
