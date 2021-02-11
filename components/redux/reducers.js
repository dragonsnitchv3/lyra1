import { combineReducers } from 'redux'

const lang = (state = 'en', action) => {
    switch (action.type){
        case 'en':
            return state = 'en';
        case 'cn':
            return state = 'cn';
        default:
            return state
    }
}

const reducer = combineReducers({
    lang: lang
})




export default reducer