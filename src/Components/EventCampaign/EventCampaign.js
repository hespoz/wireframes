import React, { Component } from 'react';

import { List, Divider, Header, Form, Input, Button, Message, Dropdown, Card  } from 'semantic-ui-react'

import HeaderMenu from '../common/HeaderMenu.js'
import ProductCart from './ProductCart.js'

import Modal from "react-responsive-modal";

import _ from 'lodash';

class EventCampaign extends Component {

    state = {
      modalOpened:false,
      monthList:[{key:'01',text:'01'},{key:'02',text:'02'},{key:'03',text:'03'},{key:'04',text:'04'},{key:'05',text:'05'},{key:'06',text:'06'},{key:'07',text:'07'},{key:'08',text:'08'},{key:'09',text:'09'},{key:'10',text:'10'},{key:'11',text:'11'},{key:'12',text:'12'}],
      yearList:[{key:'19',text:'19'},{key:'20',text:'20'},{key:'21',text:'21'},{key:'22',text:'22'},{key:'23',text:'23'}],
      products: [
        {
          id:1,
          name:"Salteñas",
          price:10
        },
        {
          id:2,
          name:"Empanadas",
          price:10
        },
        {
          id:3,
          name:"Rodizzio",
          price:12
        },
        {
          id:4,
          name:"Churrasco",
          price:8
        },
        {
          id:5,
          name:"Lechona",
          price:6
        }

      ]
    }


    updateResume = (object) => {
      let copyProductState = this.state.products
      for(let i = 0; i < copyProductState.length; i++) {
        if(copyProductState[i].id === object.id) {
          copyProductState[i] = object
        }
      }
      this.setState({products:copyProductState})
    }

    resume = () => {
      return this.state.products.map((product) => {
        if(product.total !== undefined  &&  product.total !== 0){
           return <li>
             <p>{product.name} &nbsp; ${product.total}</p>
            </li> 
        }
      })
    }

    productsAdded = () => {
      return _.find(this.state.products, (elem) => { return elem.total !== undefined  &&  elem.total !== 0}) === undefined ? false : true
    }

    openNewProductModal = () => {
      this.setState({modalOpened:true})
    }
  
    closeNewProductModal = () => {
      this.setState({modalOpened:false})
    }  

    render() {
      return <div className={"container"}>
        <HeaderMenu/>
        <Divider clearing />
        <Modal open={this.state.modalOpened} onClose={this.closeNewProductModal} style={{padding: '35px', width:'80%'}} classNames={{ modal: 'modal-custom' }}>
            <div className={"row modal-form"}>
                <div className={"col-md-12"}>

                  <Header as='h3'>
                    Register to proced...
                  </Header>

                  <Form>
                    <Form.Field>
                      <label>Email</label>
                      <Input placeholder='Email'/>
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <Input type="password" placeholder='password'/>
                    </Form.Field>

                    <Divider section />

                    <Form.Field>
                      <label>Card number</label>
                      <Input placeholder='Card number'/>
                    </Form.Field>

                    <Form.Field>

                      <div className="row">
                        <div className={"col-md-7 card-exp-container"}>
                          <Dropdown placeholder='MM' compact selection options={this.state.monthList} />
                          <Dropdown className="year" placeholder='YY' compact selection options={this.state.yearList} />
                        </div>
                        <div className={"col-md-5"}>
                          <Input placeholder='CVV'/>
                        </div>
                      </div>

                    </Form.Field>


                    <div className="row top-32-px">
                      <div className="col-md-12">
                        <Button fluid basic color='blue' onClick={this.closeNewProductModal}>Pagar</Button>
                      </div>
                    </div>

                  </Form>
                </div>
            </div>
        </Modal>

        <div className="row top-32-px">
          <div className="col-md-6">
            
            <div className="row">
              <div className="col-md-12">

                  <Header as='h1'>
                    Fiesta latina para toda la familia en Berlin
                  </Header>

                  <Header as='h3'>24/03/2018 12:00</Header>


                  <Header as='h3'>Landsberger allee 65, Berlin</Header> 


                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  {this.productsAdded() ?
                    (
                    <Message>
                        <Message.Header>Cart</Message.Header>
                        <ul> {this.resume()} </ul>
                    </Message>
                    )
                    :
                    (null)
                  }

              </div>
            </div>

            {this.productsAdded() ?
              (<div className="row top-32-px">
                <div className="col-md-12">
                  <Button fluid basic color='blue' onClick={this.openNewProductModal}>Pagar</Button>
                </div>
              </div>)
              :
              (null)
            }

          </div>
          <div className="col-md-6">

            <Card.Group itemsPerRow={3}>
                  {this.state.products.map((product) => {
                    return <ProductCart id={product.id} name={product.name} price={product.price} updateResume={this.updateResume}/>
                  })}                
            </Card.Group>
          
          </div>
        </div>

      </div>
    }
}

export default EventCampaign