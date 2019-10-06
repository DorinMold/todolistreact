import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigatie.css'

class Navigatie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Acasa</NavLink></li>
                <li><NavLink exact to="/stiri/" activeClassName="active">Stiri</NavLink></li>
                <li><NavLink exact to="/diverse/" activeClassName="active">Diverse</NavLink></li>
            </ul>
        </nav>
        )
    }
}

export default Navigatie;