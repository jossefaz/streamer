import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class StramCreate extends Component {
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>

        );
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        }
    }

    onSubmit(formValues) {
        console.log(formValues)
    }



    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>

        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'A title is mandatory';
    }
    if (!formValues.description) {
        errors.description = 'A description is mandatory';
    }
    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StramCreate);