import React, { Component } from 'react';
import Joyride from 'react-joyride'
import Tooltip from './Tooltip'
import './styles.css'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            run: false,
            steps: [
                {
                    target: 'aside',
                    content: <Tooltip />,
                    placement: 'top',
                }
            ]
        }
    }

    render(){
        return(
            <div className={'header'}>
            <Joyride run={this.state.run} steps= {this.state.steps} />
            <header>
                <h1> React Intro js </h1>
                <input type="text"/>
            </header>
            </div>
        )
    }
}

export default Header