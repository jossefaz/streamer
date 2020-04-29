import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
class StramCreate extends Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>

        );
    }

    onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="Title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>

        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StramCreate);