import React, { Component } from 'react';

import { List } from 'semantic-ui-react'

const Event = (props) => (
    <List.Item>
      <List.Content>
        <List.Content floated='right'>
          <p className={props.timeStyle}>{props.timeLeft}</p>
        </List.Content>
        <List.Header as='a'>{props.name}</List.Header>
        <List.Description>
          Book products for a value  <b>${props.price}</b> to deliver at <b>${props.date}</b> in <a><b>Vollspark, 11210</b></a>.
        </List.Description>
      </List.Content>
    </List.Item>
)

export default Event