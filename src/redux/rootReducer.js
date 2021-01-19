import { combineReducers } from "redux"
import {SET_POST, DATA_LOADED, SET_USERS, FILTER, SHOW_DROPDOWN} from './constants'

const initDataReducer = {
    items: [],
    showItems: [],
    users: [],
    listHint: [],
    isLoaded: false,
    indexesOf: null, //need for decorate matches
    errors: {
        nothingFind: false
    }
}
const dataReducer = (state = initDataReducer, action) => {
    switch (action.type) {
        case SET_POST: {
            return {
                ...state,
                showItems: action.payload,
                items: action.payload,
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        case DATA_LOADED:{
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        case SHOW_DROPDOWN: {
            if(action.payload === ''){
                return {
                    ...state,
                    listHint: [],
                    indexOf: null
                }
            }
            const value = action.payload.toLowerCase().trim()
            const users = state.users.filter(user => {
                return user.name.toLowerCase().includes(value) ? user : false
            })
            const indexesOf = users.map(user => {
                return {index: user.name.toLowerCase().indexOf(value), name: user.name}
            })
            return {
                ...state,
                listHint: users.map(user => user.name),
                indexesOf
            }
        }
        case FILTER: {
            if(action.payload === ''){
                return {
                    ...state,
                    showItems: state.items
                }
            }
            const users = state.users.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase().trim()) ? user : false)
            if(users.length === 0){
                return {
                    ...state,
                    listHint: [],
                    showItems: [],
                    errors: {
                        ...state.errors,
                        nothingFind: true
                    }
                }
            }
            const usersId = users.map(user => user.id)
            return {
                ...state,
                showItems: state.items.filter(item => {
                            return usersId.includes(item.userId)
                        }),
                listHint: [],
                errors: {
                    ...state.errors,
                    nothingFind: false
                }
            }
        }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    data: dataReducer,
})
export default rootReducer