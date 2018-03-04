import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Image, Dropdown } from 'semantic-ui-react'

import logo from '../../images/logoecomi.png';
import store from 'store2'

const HeaderMenu = withRouter(() => {
    return (
        <div className={"row top-8-px"}>
            <div className={"col"}>
            <Image src={logo} size='small' />
            </div>
            <div className={"col-md-4"}>
            
            </div>
            <div className={"text-right col"}>
                <Dropdown item text='Welcome' className={"dropdown-align"}>
                <Dropdown.Menu>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
})

export default HeaderMenu