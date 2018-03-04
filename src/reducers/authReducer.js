export default function reducer(state={
    logged:false,
    error_login:null
}, action) {
    switch(action.type){
        case "LOGGED":{
            return {...state, logged:true, error_login: null}
        }
        case "ERROR_LOGGING":{
            return {...state, logged:false, error_login: action.error_login}
        }
        default:
            break;
    }

    return state
}
