import React from 'react';

class GoogleAuth extends React.Component {
    state = {}

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // wait for gapi to get all its functionnality back
            window.gapi.client.init({
                clientId: "150782612991-pemfub5je86dsds9j2uqmi4g7jrff82f.apps.googleusercontent.com",
                scope: 'email'
            })
        })
    }

    render() {
        return (
            <div>Google AUth</div>
        );
    }
}

export default GoogleAuth;