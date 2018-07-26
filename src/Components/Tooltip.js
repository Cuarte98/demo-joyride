import React, { Component } from 'react'

const Tooltip = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )

}

export default Tooltip