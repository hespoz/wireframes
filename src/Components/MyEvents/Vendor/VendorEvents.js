import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Button, List, Divider } from 'semantic-ui-react'

import Event from './Event.js'


const VendorEvents = withRouter((props) => {
    const { history } = props

    console.log(props.events)

    return <div className={"top-event-list"}>
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
                            {props.events.map((event) => {
                                return <Event name={event.name} price={event.total} timeStyle={'red-text'} timeLeft={event.limitDate}/>
                            })}
                        </List>
                    </div>
                </div>
    </div>

})

export default VendorEvents