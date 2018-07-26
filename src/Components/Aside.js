import React, { Component } from 'react';
import './styles.css'

class Aside extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <aside>
                <h3> Menu </h3>
                <ul>
                    <li>Home</li>
                    <li>Tienda</li>
                    <li>Sobre nosotros</li>
                    <li>Contacto</li>
                </ul>
            </aside>
        )
    }
}

export default Aside