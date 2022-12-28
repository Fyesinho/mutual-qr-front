import {GET_USER_LOGIN, GET_USER_QR, GET_USER_QR_INIT, PUT_USER_ID} from "./User.types";

const reducer = (state, action) => {
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
        case GET_USER_QR_INIT:
            return {
                ...state,
                loadingSelectedUser: true,
            }
        case PUT_USER_ID:
            return {
                ...state,
                selectedUserId: payload,
            }
        default:
            return state;

    }
}

export default reducer;