import React, { Component } from 'react';
import Tooltip from './Tooltip';

class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: [
                {
                    target: 'header',
                    content: <Tooltip title={this.props.color} content='Box rojo probando direccion de los datos' />,
                    placement: 'bottom'
                }

            ]
        }
    }
    
    
    render() {
        if(this.props.color === 'red'){
            
        }
        const boxStyle = { 
            width: 100,
            height: 100,
            backgroundColor: this.props.color,
            border: '3px solid black'
         }
        return (
            <div className={'box-' + this.props.color} style={boxStyle}>
            </div>
        )
    }
}

export default Box;