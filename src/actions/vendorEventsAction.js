export function getVendorEvents(){
    return function(dispatch) {
        let events = [
            {
                name:"Fiesta Colombiana",
                total:500,
                limitDate:'12.03.2018 10:30'
            },
            {
                name:"Fiesta de independencia",
                total:500,
                limitDate:'21.08.2018 10:30'
            }
        ]
        dispatch({type:"VENDOR_EVENTS", events:events})
    }
}
