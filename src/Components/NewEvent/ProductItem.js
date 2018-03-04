import React, { Component } from 'react';

import { Segment, Image, List, Button } from 'semantic-ui-react'


const ProductItem = (props) => (
    
    <Segment>
      <div className="row">
            <div className="col-md-2">
              <Image src={props.image} size='small' />
            </div>
            <div className="col-md-7">
              <List>
                <List.Item>
                  <List.Content>
                    <b>Name:</b>{props.name}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <b>Price:</b>{props.price}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <b>Description:</b> {props.description}
                  </List.Content>
                </List.Item>
              </List>
            </div>
            <div className="col-md-3 text-center">
              <Button basic color='red' content='Remove' size='small'/>
            </div>
      </div>
    </Segment>
  

)

export default ProductItem