import React from 'react'

export default function GoogleBtn(props) {
    return (
        <button className="ui red google button" onClick={props.click}>
            <i className="google icon" />
            {props.content}
        </button>
    )
}
