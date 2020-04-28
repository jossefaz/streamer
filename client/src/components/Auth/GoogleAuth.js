import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // wait for gapi to get all its functionnality back
            window.gapi.client.init({
                clientId: "150782612991-pemfub5je86dsds9j2uqmi4g7jrff82f.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    renderAuthButton() {

        switch (this.state.isSignedIn) {
            case null:
                return <div>No Idea</div>
            case true:
                return <div>Signed In</div>
            default:
                return <div>Not Signed In</div>;
        }
    }

    render() {
        return (<div>{this.renderAuthButton()}</div>);
    }
}

export default GoogleAuth;