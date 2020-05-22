import { USER_LOGIN } from "./types";
import UserList from "../data/userList.json";
//import { browserHistory } from "react-router";

export const login = (data) => dispatch => {
    let checkExistingUser = UserList.filter((user) => {
        if (user.username === data.username && user.password === data.password) {
            return user;
        }

    })
    dispatch({
        type: USER_LOGIN,
        payload: {
            user: (checkExistingUser.length > 0 ? checkExistingUser[0] : {}), status: (checkExistingUser.length > 0 ? "success" : "failure")
        }


    })


}