import React, { Component } from 'react';

import { login } from "../../actions/authAction.js";

import { Form, Input, Button, Divider, Header, Message } from 'semantic-ui-react'

import {
    withRouter
} from 'react-router-dom';

import HeaderMenu from '../common/HeaderMenu.js'

import { form } from 'react-inform'
import {connect} from "react-redux";

import store from 'store2'

const fields = ['email', 'password'];

const validate = values => {
    const { email, password } = values;
    const errors = {};

    if (!email) errors.email = 'Email is required!';
    if (!password) errors.password = 'Password is required!';

    return errors;
}

@form({
    fields,
    validate
})
@connect((store) => {
    return {
        logged:store.auth.logged,
        error_login:store.auth.error_login
    }
})
class Login extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        const {form} = this.props;
        form.forceValidate();

        if (form.isValid()) {
            const { email, password } = this.props.fields;

            let payload = {
                email: email.props.value,
                password: password.props.value
            }
            this.props.dispatch(login(payload))
        }

    }

    render() {

        const { email, password } = this.props.fields

        if(store("token") !== undefined && this.props.logged){
            this.props.history.push('/board')
        }

        return (
            <div className={"container"}>

                <HeaderMenu/>
                <Divider clearing />

                <div className="row top-32-px">
                    <div className="offset-md-3 col-md-6 text-center">
                        <Header as='h3'>
                            Login
                        </Header>
                    </div>
                </div>

                <div className="row top-16-px">
                    <div className="offset-md-3 col-md-6">
                        {this.props.error_login ?
                            <Message negative>
                                {this.props.error_login}
                            </Message>
                            :
                            null
                        }

                        <Form onSubmit={(e) => this.onSubmit(e)}>
                            <Form.Field>
                                <label>Email</label>
                                <Input placeholder='Email' {...email.props}/>
                                <small className="field-error">{email.error}</small>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <Input type="password" placeholder='Password' {...password.props}/>
                                <small className="field-error">{password.error}</small>
                            </Form.Field>
                            <Button fluid basic color='blue'>Login</Button>
                        </Form>
                    </div>
                </div>

            </div>
        ) 
    }
}

export default withRouter(Login)