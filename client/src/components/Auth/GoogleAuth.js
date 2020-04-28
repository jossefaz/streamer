import React from 'react';
import GoogleBtn from './GoogleBtn'

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

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {

        switch (this.state.isSignedIn) {
            case null:
                return null
            case true:
                return <GoogleBtn content="Sign out" click={this.onSignOutClick} />
            default:
                return <GoogleBtn content="Sign in with Google" click={this.onSignInClick} />;
        }
    }

    render() {
        return (<div>{this.renderAuthButton()}</div>);
    }
}

export default GoogleAuth;