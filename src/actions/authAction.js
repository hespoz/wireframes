import store from 'store2'

export function login(credentials){
    return function(dispatch) {
        if (credentials.email === "vendor@vendor.com" && credentials.password === "vendor") {
            store({token:"3tokentokentoken#!"}, {userType:"VENDOR"})
            dispatch({type:"LOGGED"})
        } else if (credentials.email === "buyer@buyer.com" && credentials.password === "buyer") {
            store({token:"3tokentokentoken#!"}, {userType:"BUYER"})
            dispatch({type:"LOGGED"})
        } else {
            dispatch({type:"ERROR_LOGGING", error_login:"Email or password is incorrect"})
        }
    }
}