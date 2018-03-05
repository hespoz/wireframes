
export default function reducer(state={
    events:[]
}, action) {
    switch(action.type){
        case "VENDOR_EVENTS":{
            return {...state, events:action.events}
        }
        default:
            break;
    }

    return state
}
