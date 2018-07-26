import React, { Component } from 'react';
import JoyRide from 'react-joyride'
import Tooltip from './Tooltip'
import Box from './Box'
import './styles.css'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleRed: true,
            toggleGreen: true,
            toggleBlue: true,
            toggleWT: false,
            data: this.props.data,
            config: {
                run: true,
                steps: [
                    {
                        target: '.box-red',
                        content: <Tooltip title={this.props.color} content='Primer Tooltip' />,
                        placement: 'bottom'
                    },
                    {
                        target: '.box-blue',
                        content: <Tooltip title={this.props.color} content='Segundo tooltip' />,
                        placement: 'bottom'
                    },
                    {
                        target: '.box-green',
                        content: <Tooltip title={this.props.color} content='Tercer tooltip' />,
                        placement: 'bottom'
                    }
                ]
            }

        }

    }


    activateRed = () => {
        this.setState({
            toggleRed: !this.state.toggleRed,
        })
    }

    activateGreen = () => {
        this.setState({
            toggleGreen: !this.state.toggleGreen,
        })
    }

    activateBlue = () => {
        this.setState({
            toggleBlue: !this.state.toggleBlue,
        })
    }

    activateWT = () => {
        this.setState({
            toggleWT: !this.state.toggleWT,
        })
    }

    toggleRun = () => {
        this.setState({
            config: {
                ...this.state.config,
                run: !this.state.config.run,
            }
        })
    }

    setSteps = (stepsArray) => {
        this.setState({
            config: {
                ...this.state.config,
                steps: stepsArray
            }
        })
    }

    render() {
        const { toggleRed, toggleBlue, toggleGreen, toggleWT, config } = this.state;

        const stepRBG = [
            {
                target: '.box-red',
                content: <Tooltip title={this.props.color} content='Primer Tooltip' />,
                placement: 'bottom'
            },
            {
                target: '.box-blue',
                content: <Tooltip title={this.props.color} content='Segundo tooltip' />,
                placement: 'bottom'
            },
            {
                target: '.box-green',
                content: <Tooltip title={this.props.color} content='Tercer tooltip' />,
                placement: 'bottom'
            }
        ]
        return (
            <main>
                {toggleWT ? <JoyRide run={config.run} steps={config.steps} /> : null}
                <h2> Body </h2>
                <div className="boxContainer">
                    {toggleRed ? <Box color="red" /> : null}
                    {toggleBlue ? <Box color="blue" /> : null}
                    {toggleGreen ? <Box color="green" /> : null}
                </div>
                <div className="appState">
                    <div className="keypad">
                        <button onClick={this.activateRed} >Toggle Red</button>
                        <button onClick={this.activateBlue} >Toggle Blue</button>
                        <button onClick={this.activateGreen} >Toggle Green</button>
                        <button onClick={this.activateWT} >Toggle WalkThrough</button>
                        <button onClick={this.toggleRun} >Toggle Run</button>
                    </div>
                    <div className="keystate">
                        <p>Red box mount: {toggleRed.toString()}</p>
                        <p>Blue box mount: {toggleBlue.toString()}</p>
                        <p>Green box mount: {toggleGreen.toString()}</p>

                        <p>Walkthrough mount: {toggleWT.toString()}</p>
                        <p>Walkthrough run: {config.run.toString()}</p>
                    </div>
                </div>

            </main>
        )
    }
}

export default Main 