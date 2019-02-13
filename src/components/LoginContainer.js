import React, { Component } from 'react';

class LoginContainer extends Component {
    state = { email: '', password: '' };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div id="LoginContainer" className="inner-container">
                <div id="Header">
                    <img src="/assets/icon.png" alt="logo" />
                    <h1>Chatastrophe</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <p>Sign in or sign up by entering your email and password.</p>
                    <input 
                        type="text" 
                        placeholder="Your email" 
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <input 
                        type="password"
                        placeholder="Your password" 
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <button className="red light" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginContainer;