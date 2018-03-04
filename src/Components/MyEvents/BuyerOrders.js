import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Header, List} from 'semantic-ui-react'

import Order from './Order.js'

const BuyerOrders = withRouter((props) => {
  
    const { history } = props
  
    return (

    <div className={"top-event-list"}>

        <div className={"row top-24-px"}>
          <div className={"offset-md-4 col-md-5 text-center"}>
              <Header as='h3'>
                Resumen de tus pedidos
              </Header>
          </div> 
        </div>            
        <div className={"row top-24-px"}>
           {/* Event list */}
           <div className={"offset-md-4 col-md-5"}>
              <List relaxed='very' verticalAlign='middle'>
                <Order orderNumber={23423} eventName={"Fiesta Colombiana"} date={"21/03/2018 10:00"} location={"Landsberger Allee 65"} />
                <Order orderNumber={22312} eventName={"Fiesta Colombiana"} date={"21/03/2018 10:00"} location={"Landsberger Allee 65"} />
              </List>
           </div>
        </div>
    </div>

    )

})

export default BuyerOrders