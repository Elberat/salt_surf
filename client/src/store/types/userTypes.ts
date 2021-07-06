export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const SIGN_OUT_REQUEST = "SIGN_OUT_REQUEST";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";

export const SIGN_CHECK_REQUEST = "SIGN_CHECK_REQUEST";
export const SIGN_CHECK_SUCCESS = "SIGN_CHECK_SUCCESS";
export const SIGN_CHECK_FAILURE = "SIGN_CHECK_FAILURE";

export interface CurrentUserState {
    id: number;
    email: string;
    role: string;
    iat: number;
    exp: number;
}
export interface AuthState {
    currentUser: CurrentUserState | null | true;
    token: {} | string | null;
    error: null | string;
    loading: boolean;
    isAuthenticated: boolean;
    isAuth: boolean;
}

export enum UsersActionTypes {
    SIGN_IN_REQUEST = "SIGN_IN_REQUEST",
    SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
    SIGN_IN_ERROR = "SIGN_IN_ERROR",
    SIGN_UP_REQUEST = "SIGN_UP_REQUEST",
    SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
    SIGN_UP_FAILURE = "SIGN_UP_FAILURE",
    SIGN_OUT_REQUEST = "SIGN_OUT_REQUEST",
    SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
    SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
    SIGN_CHECK_REQUEST = "SIGN_CHECK_REQUEST",
    SIGN_CHECK_SUCCESS = "SIGN_CHECK_SUCCESS",
    SIGN_CHECK_FAILURE = "SIGN_CHECK_FAILURE",
}
// SIGN IN ----------------------------
interface SingInAction {
    type: UsersActionTypes.SIGN_IN_REQUEST;
}
interface SingInSuccess {
    type: UsersActionTypes.SIGN_IN_SUCCESS;
    payload: any;
}
interface SingInError {
    type: UsersActionTypes.SIGN_IN_ERROR;
    payload: string;
}
// SIGN UP -----------------------------
interface SingUpAction {
    type: UsersActionTypes.SIGN_UP_REQUEST;
}
interface SingUpSuccess {
    type: UsersActionTypes.SIGN_UP_SUCCESS;
    payload: any;
}
interface SingUpFailure {
    type: UsersActionTypes.SIGN_UP_FAILURE;
    payload: string;
}
// SIGN OUT -----------------------------
interface SingOutAction {
    type: UsersActionTypes.SIGN_OUT_REQUEST;
}
interface SingOutSuccess {
    type: UsersActionTypes.SIGN_OUT_SUCCESS;
    payload: any;
}
interface SingOutFailure {
    type: UsersActionTypes.SIGN_OUT_FAILURE;
    payload: string;
}

// SIGN OUT -----------------------------
interface SingCheckAction {
    type: UsersActionTypes.SIGN_CHECK_REQUEST;
}
interface SingCheckSuccess {
    type: UsersActionTypes.SIGN_CHECK_SUCCESS;
    payload: boolean;
}
interface SingCheckFailure {
    type: UsersActionTypes.SIGN_CHECK_FAILURE;
    payload: string;
}

export type UsersAction =
    | SingInAction
    | SingInSuccess
    | SingInError
    | SingUpAction
    | SingUpSuccess
    | SingUpFailure
    | SingOutAction
    | SingOutSuccess
    | SingOutFailure
    | SingCheckAction
    | SingCheckSuccess
    | SingCheckFailure;