import React, { Component, createContext } from 'react'

export const MyContext = createContext()

export default class ContextContext extends Component {
    state = {
        nume: 'Roxana',
        varsta: 104,
        mancare: 'ciocolata',
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                increase: () => {
                    this.setState ({
                        varsta: this.state.varsta+1,
                        nume: 'Grigore'.trim()
                    })
                }
            }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }
}
