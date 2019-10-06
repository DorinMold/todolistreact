import React, { Component, useState } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react'

// class Note extends Component {
//     constructor(props) {
//         super(props);
//         // this.mesaj = "Salutari din componentul Note";
//         this.noteContent = props.noteContent;
//         this.noteId = props.noteId;
//     }

//     deleteItem(id) {
//         //this.props.deleteItem(this.noteId);
//         this.props.deleteItem(id);  //SAU poate fi folosita linia de mai sus si se scoate argumentul functiei
//     }

//     render() {
//         return (
//             <div className="fade-in note">
//                 {/* <h1>{ this.mesaj }</h1> */}
//                 <p className="noteContent"> { this.props.noteContent } <span onClick={() => this.deleteItem(this.noteId) }>x</span> </p>
//             </div>
//         )
//     }
// }

// Note.propTypes = {
//      noteContent: PropTypes.string.isRequired
// }
const styles = {
    style1: {
        display: 'inline-block',
        margin: '0 15px',
        color: 'red'
    }
}

const Note = (props) => {
        // this.mesaj = "Salutari din componentul Note";
        let noteContent = props.noteContent;
        let noteId = props.noteId;
        const [om, faOm] = useState("Andrei")

    const deleteItem = (id) => {
        //this.props.deleteItem(this.noteId);
        props.deleteItem(id);  //SAU poate fi folosita linia de mai sus si se scoate argumentul functiei
    }

    const adaugaOm = () => { 
        om == "Andrei" ? faOm("Grigore") : faOm("Andrei") //sau se poate face direct in onClick mai jos
    }
        return (
            <div className="fade-in note">
                {/* <h1>{ this.mesaj }</h1> */}
                <p className="noteContent"> { noteContent } - {om} <span style={styles.style1} onClick={() => adaugaOm()}>Schimba la click</span><span onClick={() => deleteItem(noteId) }>x</span> </p>
            </div>
        )
}

Note.propTypes = {
     noteContent: PropTypes.string.isRequired
}

export default Note;
