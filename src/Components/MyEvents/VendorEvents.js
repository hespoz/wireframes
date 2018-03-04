import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Button, List, Divider } from 'semantic-ui-react'

import Event from './Event.js'

class VendorEvents extends Component {

    render () {

        const { history } = this.props

        return (

            <div className={"top-event-list"}>
                <div className={"row"}>
                    {/* Event create button */}
                    <div className={"offset-md-4 col-md-5"}>
                        <Button fluid basic color='blue' onClick={()=>history.push('/board/event/new')}>Create event</Button>
                    </div>
                </div>
                <div className={"row top-24-px"}>
                    {/* Event list */}
                    <div className={"offset-md-4 col-md-5"}>
                        <List relaxed='very' divided verticalAlign='middle'>
                            <Event name={"Fiesta Colombiana"} price={500} timeStyle={'red-text'} timeLeft={"00:50:30"}/>
                            <Event name={"Gran encuentro peruano"} price={350} timeStyle={'red-text'} timeLeft={"02:20:09"}/>
                            <Event name={"Independencia boliviana"} price={250} timeStyle={'red-green'} timeLeft={"03:50:23"}/>
                            <Event name={"Carnaval de barranquilla"} price={50} timeStyle={'red-green'} timeLeft={"04:30:20"}/>
                            <Event name={"Festival de la arepa de huevo"} price={45} timeStyle={'red-orange'} timeLeft={"07:40:10"}/>
                            <Event name={"Arepas en el parque"} price={15} timeStyle={'red-orange'} timeLeft={"08:50:32"}/>
                            <Event name={"Arepas en el parque"} price={12} timeStyle={'red-orange'} timeLeft={"10:50:33"}/>
                        </List>
                    </div>
                </div>
            </div>
    
        )
    }
}

export default withRouter(VendorEvents)