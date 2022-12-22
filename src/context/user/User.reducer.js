import {GET_USER_LOGIN, GET_USER_QR, PUT_USER_ID} from "./User.types";

export default (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case GET_USER_LOGIN:
            return {
                ...state,
                loginUser: payload,
                loadingLoginUser: false,
            }
        case GET_USER_QR:
            return {
                ...state,
                selectedUser: payload,
                loadingSelectedUser: false,
            }
        case PUT_USER_ID:
            debugger;
            return {
                ...state,
                selectedUserId: payload,
            }
        default:
            return state;

    }
}