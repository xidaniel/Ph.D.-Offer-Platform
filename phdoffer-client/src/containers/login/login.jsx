import React, {Component} from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button, Radio
} from 'antd-mobile'

import Logo from "../../components/logo/logo";

const ListItem = List.Item

export default class Register extends Component {
    state = {
        username: '',
        password: '',
    }

    login = () => {
        console.log(this.state)
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render() {
        return (
            <div>
                <NavBar>Ph.D &nbsp;Offer</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="username" onChange={val => {this.handleChange('username', val)}}>Username: </InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder="password" type="password" onChange={val => {this.handleChange('password', val)}}>Password:</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>Log in</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>Sign up</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}