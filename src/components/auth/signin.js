import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class Signin extends Component {
    constructor(props) {
        super(props);
    }

    handleFormSubmit(email, password) {
        console.log(email);
    }

    render() {
        const {handleSubmit, fields: {email, password}} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email</label>
                    <input {...email} type="text" name="email" className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password</label>
                    <input {...password} type="text" name="password" className="form-control"/>
                </fieldset>
                <button className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);