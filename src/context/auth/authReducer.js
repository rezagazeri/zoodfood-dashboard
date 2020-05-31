import { userActionTypes } from "./../Types";

const authReducer = (state, action) => {
    switch (action.type) {
        case userActionTypes.LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload);
            return {...state, ...action.payload, isAuthenticated: true };
        case userActionTypes.LOGIN_FAIL:
            return {...state, error: action.payload, isAuthenticated: false };
        default:
            return state;
    }
};

export default authReducer;