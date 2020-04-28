import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
class StramCreate extends Component {
    renderInput({ input }) {
        return <input {...input} />;
    }

    render() {
        console.log(this.props)
        return (
            <form>
                <Field name="Title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StramCreate);