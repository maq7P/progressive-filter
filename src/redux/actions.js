import { getData } from "../API"
import { DATA_LOADED, SET_POST, SET_USERS, FILTER, SHOW_DROPDOWN } from "./constants";

// thunk for request data
export const fetchData = () => (dispatch) => {
    dispatch(data_loaded(false))
    const first = getData('posts').then(data => {
        dispatch(set_posts(data))
    })
    const second = getData('users').then(data => {
        dispatch(set_users(data))
    })
    Promise.all([first, second]).then(() => {
        dispatch(data_loaded(true))
    })
}
// action creators
const data_loaded = (payload) => ({
    type: DATA_LOADED,
    payload
})
const set_posts = (payload) => ({
    type: SET_POST,
    payload
})
const set_users = (payload) => ({
    type: SET_USERS,
    payload
})
export const filter = (payload) => ({
    type: FILTER,
    payload
})
export const show_dropdown = (payload) => ({
    type: SHOW_DROPDOWN,
    payload
})
