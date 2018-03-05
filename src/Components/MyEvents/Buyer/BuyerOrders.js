import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Header, List} from 'semantic-ui-react'

import Order from './Order.js'

const BuyerOrders = withRouter((props) => {
  
    const { history } = props
  
    console.log(props.events)

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
                {props.events.map((event) => {
                    return <Order orderNumber={event.orderNumber} eventName={event.name} date={event.limitDate} location={event.location} items={event.items} />
                })}
              </List>
           </div>
        </div>
    </div>

    )

})

export default BuyerOrders