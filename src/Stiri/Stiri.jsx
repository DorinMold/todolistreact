import React from 'react'
import './Stiri.css'
import StiriDetail from './StiriDetail'

class Ziare extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stiri: [{
                    id: 1,
                    title: "Stiri ora 6",
                    content: "Soarele rasare la ora 5:30"
                },
                {
                    id: 2,
                    title: "Stiri ora 7",
                    content: "Soarele rasare la ora 5:30"
                },
                {
                    id: 3,
                    title: "Stiri ora 8",
                    content: "Soarele rasare la ora 5:30"
                },
                {
                    id: 4,
                    title: "Stiri ora 9",
                    content: "Soarele rasare la ora 5:30"
                },
                {
                    id: 5,
                    title: "Stiri ora 10",
                    content: "Soarele rasare la ora 5:30"
                }]
        }

    }

    render() {
        return (
            <div id="stiri">
                    <h1>Stirile de azi</h1>
                  { this.state.stiri.map(stire => {
                       return (
                        <StiriDetail key={ stire.id } title={ stire.title }/>
                       )
                   }) 
                   }
            </div>
        );
    }
}

export default Ziare;