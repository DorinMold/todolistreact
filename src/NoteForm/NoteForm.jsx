import React, { Component } from 'react'
import './NoteForm.css'
import {connect} from 'react-redux'
import ContextContext from '../context/Context'
import { MyContext } from '../context/Context' 
import propTypes from 'prop-types'

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            continutNou: '',
            colorButton: 'black'
        }

        this.styles = {
            style1: {
                color: "white",
                backgroundColor: "red",
                margin: "10px auto",
                textAlign: "center",
                width: "30%",
                lineHeight: "1.2"
            }
        }

        this.handleInput = this.handleInput.bind(this)
        this.scrieComentariu = this.scrieComentariu.bind(this)
        this.onEnter = this.onEnter.bind(this)
    }

    onEnter(e){
        if(e.keyCode == 13){
            this.scrieComentariu()
            this.submitButton.style.backgroundColor = 'blue'
            setTimeout(()=> {
                this.submitButton.style.backgroundColor = "#019875"
            }, 500)
        }
    }

    handleInput(e) {
        this.setState({
            continutNou: e.target.value
        })
    }

    scrieComentariu(){
        // this.setState("");
        this.props.adaugaComentariu(this.state.continutNou)
        this.setState({
            continutNou: ''
        })
    }

    componentDidMount(){
        this.props.changeStateStart();
    }

    render(props) {
        return (
            <div className="formWrapper">
                <input type="text" className="noteInput" onKeyDown={this.onEnter} onChange={ this.handleInput } placeholder="Scrie un comentariu nou" 
                    value={ this.state.continutNou }/>
                <button ref={(input)=>{this.submitButton = input}} className="noteButton" onClick={ () => this.scrieComentariu() }> Adauga </button>
                <div style={{fontSize: '25px', textAlign: "center", color: "white"}}> Elemente venite din store </div>
                { this.props.coment.map( com => <div style={this.styles.style1} key={Math.random()}> {com.nume} </div>) }
                <MyContext.Consumer >
                   {(context) => <div> <span> {context.state.varsta}  </span>
                                    <button style={{backgroundColor: this.state.colorButton, color: 'white', width: '150px',
                                     padding: '10px', borderRadius: '5px'}} onClick={() => context.increase()}> Creste varsta </button>
                                    { context.state.nume == 'Grigore'.trim() && <span> { context.state.nume }</span> }
                                 </div>}
                </MyContext.Consumer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        coment: state.Comentarii
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStateStart: () => { dispatch({type:'ieri'}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);