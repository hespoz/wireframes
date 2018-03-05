import { combineReducers } from "redux"

import auth from "./authReducer"
import vendorEvents from "./vendorEventsReducer"
import buyerEvents from "./buyerEventsReducer"

export default combineReducers({
    auth,
    vendorEvents,
    buyerEvents
})
