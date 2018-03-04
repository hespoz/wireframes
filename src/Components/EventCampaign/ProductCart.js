import React, { Component } from 'react';

import { Image, Input, Button, Message, Card  } from 'semantic-ui-react'

import saltena from '../../images/saltena.jpg';

class ProductCart extends React.Component {
    state = {
      items:0
    }
  
    updateItems = (e) => {
      this.setState({items:e.value})
    }
  
    onDecrement = () => {
      if(this.state.items > 0){
        this.setState({items:this.state.items-1}, () => {
          this.props.updateResume({
            id:this.props.id,
            items: this.state.items,
            name: this.props.name,
            price: this.props.price,
            total: this.state.items * this.props.price
          })
        })
      }
    }
  
    onIncrement = () => {
        this.setState({items:this.state.items+1}, () => {
          this.props.updateResume({
            id:this.props.id,
            items: this.state.items,
            name: this.props.name,
            price: this.props.price,
            total: this.state.items * this.props.price
          })
        })
    }
  
    render() {
      return  <Card>
      <Image src={saltena}/>
      <Card.Content>
        <Card.Header>
          {this.props.name}
        </Card.Header>
        <Card.Meta>
          ${this.props.price}
        </Card.Meta>
      </Card.Content>  
      <Card.Content extra>
        <div className="increment-container">
          <div className="left">
           <Button basic color='blue' size='mini' onClick={this.onDecrement}>-</Button>
          </div>
          <div>
            <Input placeholder='0' size='mini' className="increment-input" value={this.state.items}/>
          </div>
          <div className="right">
            <Button basic color='blue' size='mini' onClick={this.onIncrement}>+</Button>
          </div>
        </div>
      </Card.Content>
    </Card>
    }  
  
  }

  export default ProductCart