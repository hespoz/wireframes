import React, { Component } from 'react';

import { List, Card, Button } from 'semantic-ui-react'

const Order = (props) => (
    <List.Item>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <div className="row">
              <div className="col-md-8">
                {props.eventName}
              </div>
              <div className="col-md-4 text-right">
                #{props.orderNumber}
              </div>
            </div>
          </Card.Header>
          <Card.Meta>
            {props.date + ' ' + props.location}
          </Card.Meta>
          <Card.Description>   
            <br/>       
            <List.List as='ul'>
              <List.Item as='li'>2 Sancocho $20</List.Item>
              <List.Item as='li'>3 Lechonas $30</List.Item>
              <List.Item as='li'>40 Empanas $60</List.Item>
            </List.List>
          </Card.Description>
        </Card.Content>    
        <Card.Content extra>
            <Button fluid basic color='blue'>Print</Button>
        </Card.Content>
      </Card>
    </List.Item>
  )

  export default Order