import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import { Input, TextArea, Form, Button } from 'semantic-ui-react'

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import Dropzone from 'react-dropzone'

import Modal from "react-responsive-modal";

import ProductItem from './ProductItem.js'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import saltena from '../../images/saltena.jpg';
import chilena from '../../images/chilena.jpg';
import asado from '../../images/asado.jpg';

export default withRouter (class NewEvent extends React.Component {
  
    state = {
      startDate:moment(),
      modalOpened:false,
      file: null
    }
  
    onDrop = (files) => {
      console.log("onDrop", files)
      //We take only one.
      this.setState({file:files[0]})
    }
  
    handleChange = (date) => {
      this.setState({
        startDate: date
      });
    }
  
    openNewProductModal = () => {
      this.setState({modalOpened:true})
    }
  
    closeNewProductModal = () => {
      this.setState({modalOpened:false})
    }
  
    onCrop = () => {
      console.log("Cropping", this.refs)
    }
  
    onCreateEvent = () => {
      const { history } = this.props
      history.push('/campaign/12312312313123')
    }
  
    render() {
  
      return(
      <div>
  
        <Modal open={this.state.modalOpened} onClose={this.closeNewProductModal} style={{padding: '35px'}}>
  
            <div className={"row modal-form"}>
              <div className={"col-md-6"}>
                <Form>
                  <Form.Field>
                    <label>Product name</label>
                    <Input placeholder='Product name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <Input placeholder='Product name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Description</label>
                    <TextArea placeholder='Product description' />
                  </Form.Field>
                </Form>
              </div>
              <div className={"col-md-6"}>
                
  
                {this.state.file !== null ? 
                  (
                    <div className={"row"}>
                      <div className={"col-md-12"}>
                        <Cropper
                          key={0}
                          ref={0}
                          src={this.state.file.preview}
                          style={{height: 140, width: 100}}
                          // Cropper.js options
                          aspectRatio={16 / 9}
                          guides={false}
                          crop={this.onCrop} />
                      </div>
                  </div>
                  )
                  :
                  (null)
                }
  
  
  
                <div className={"row top-16-px"}>
                  <div className={"col-md-12"}>
                    <Dropzone 
                        accept="image/jpeg, image/png"
                        style={{width: '100%', height: '150px', borderWidth: '2px', borderColor: 'rgb(102, 102, 102)', borderStyle: 'dashed', borderRadius: '5px', paddingTop:'60px', paddingLeft:'15px'}}
                        onDrop={this.onDrop}>
                        <h5>Drop product image here</h5>
                    </Dropzone>
                  </div>
                </div>
  
  
  
  
  
  
              </div>
            </div>
  
    
  
  
  
            <div className="row">
              <div className="col-md-12 text-right">    
                  <Button basic color='blue' onClick={() => {
                      this.closeNewProductModal()
                  }}>Add product</Button>
              </div>
            </div>
  
  
  
        </Modal>
  
  
       <div className={'row'}>
            
  
            <div className='col-md-6'>
            
              <Form>
                <Form.Field>
                  <label>Event name</label>
                  <Input placeholder='Event name'/>
                </Form.Field>
  
                <Form.Field>
                  <label>Place</label>
                  <Input placeholder='Place'/>
                </Form.Field>
  
                <Form.Field>
                  <label>Date</label>
                  <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          dateFormat="LLL"
                          timeCaption="time"
                  />
                </Form.Field>
  
           
                <Form.Field>
                  <label>Description</label>
                  <TextArea placeholder='Event description' />
                </Form.Field>
  
                </Form>
  
  
              <div className={'row top-16-px'}>
                <div className='col-md-12'>
                  <Button fluid basic color='blue' onClick={this.onCreateEvent}>Create Event</Button>
                </div>
              </div>
  
  
                
            </div>
  
            <div className='col-md-6'>
            
  
              <div className={'row'}>
                <div className='col-md-12'>
                  <Button fluid basic color='blue' onClick={this.openNewProductModal}>Add product</Button>
                </div>
              </div>
  
              <div className={'row top-8-px'}>
                <div className='col-md-12'>
                  <ProductItem image={saltena} name="Salteñas bolivianas" price="3.45" description="Empanadas bolivianas"/>
                  <ProductItem image={chilena} name="Empanada chilena" price="3.45" description="Excelente empanada"/>
                  <ProductItem image={asado} name="Asado argentino" price="14.50" description="Delicioso asado argentino"/>
                  <ProductItem image={asado} name="Rodizzio brasilero" price="21.50" description="Carne ilimitada"/>
                </div>
              </div>
  
  
            </div>
      
            
  
  
  
  
       </div>
       </div>);
  
    }
  
  
  })