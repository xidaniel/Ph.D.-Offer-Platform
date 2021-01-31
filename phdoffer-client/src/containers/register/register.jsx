import React, {Component} from 'react'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'boss',
    }
    register = () => {
        console.log(this.state)
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    toLogin = () => {
        this.props.history.replace('/login')
    }

    render() {
        const {type} = this.state
        const {msg, redirectTo} = this.props.user
        // 如果redirectTo有值, 就需要重定向到指定的路由
        if(redirectTo) {
            return <Redirect to={redirectTo}/>
        }

        return (
            <div>
                <NavBar>Ph.D &nbsp;Offer</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {msg ? <div className='error-msg'>{msg}</div> : null}
                        <WhiteSpace/>
                        <InputItem placeholder="username" onChange={val => {this.handleChange('username', val)}}>Username: </InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder="password" type="password" onChange={val => {this.handleChange('password', val)}}>Password:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder="confirm password" type="password" onChange={val => {this.handleChange('password2', val)}}>Confirm:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>User&nbsp; Type:</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='student'} onChange={() => this.handleChange('type', 'student')}>Student</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='boss'} onChange={() => this.handleChange('type', 'boss')}>Boss</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>Sign up</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>Have an account? Log in</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {register}
)(Register)