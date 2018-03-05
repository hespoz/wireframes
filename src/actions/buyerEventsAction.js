export function getBuyerEvents(){
    return function(dispatch) {
        let events = [
            {
                orderNumber:23456,
                name:"Fiesta Colombiana",
                limitDate:'12.03.2018 10:30',
                location:"Landsberger Allee 65",
                items:['Sancocho 2 $10','Lechonas 2 $15','Empanadas 30 $60']
            }
        ]
        console.log("entro")
        dispatch({type:"BUYER_EVENTS", events:events})
    }
}