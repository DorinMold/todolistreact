import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import Navigatie from './Navigatie/Navigatie';
import Diverse from './Diverse/Diverse';
import Stiri from './Stiri/Stiri' 
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContextContext from './context/Context'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // notes: [{
      //   id: 1,
      //   comentariu: "Comentariul 1"
      // },{
      //   id: 2,
      //   comentariu: "Comentariul 2"
      // }]
      notes: []
    }

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('projects')

    this.adaugaComentariu = this.adaugaComentariu.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount(){
    // const comentariiAnterioare = this.state.notes; //SAU
    const comentariiAnterioare = []
    this.database.on('child_added', snap => {   //asta e un event listner - deci nu se declanseaza in faza componentDidMount
       comentariiAnterioare.push({
         noteId: snap.key,
         noteContent: snap.val().comentariu
       })

       this.setState({
        notes: comentariiAnterioare
      })

    })

    this.database.on('child_removed', function(snap){
        for(let i = 0; i < comentariiAnterioare.length; i++) {
          if(comentariiAnterioare[i].noteId == snap.key) {
              comentariiAnterioare.splice(i,1);
              console.log(comentariiAnterioare);
              break;
          }
        }

        this.setState({
            notes: comentariiAnterioare
        })
    }.bind(this)) //daca era arrow function atunci nu mai era nevoie de acest bind
  }

  deleteItem(id){
    // const comm = this.state.notes;
    // const indexItem = comm.findIndex((el) => el.noteId == id)
    // comm.splice(indexItem, 1);
    // this.setState({
    //   notes: comm
    // })

    this.database.child(id).remove()
  }

  adaugaComentariu(comm) {
    // const comentariiAnterioare = this.state.notes;
    // // comentariiAnterioare.push(comm);
    // comentariiAnterioare.push({id: comentariiAnterioare.length + 1, comentariu: comm })
    // this.setState({
    //   notes: comentariiAnterioare
    // })
    this.database.push().set({comentariu: comm})
  }

  render(){
    return (
      <BrowserRouter>
        <ContextContext>
        <div className="notesWrapper">
            <Navigatie  />
            <div className="notesHeader">
              <div className="heading"> React si  Firebase mic-proiect </div>
            </div>
            {/* <h1> React si Firebase mic-proiect </h1> */}
            <div className="notesBody">
              { 
                this.state.notes.map(
                  note => {
                    return   <Note noteContent={ note.noteContent } noteId={ note.noteId } key={ note.noteId } 
                    deleteItem={this.deleteItem} />
                  }
                )
              } 
            </div>
              <Switch>
                  <Route path="/diverse/" component={ Diverse }>  
                  </Route>
                  <Route path="/stiri/" component={ Stiri }>   
                  </Route>  
              </Switch>

            <div className="notesFooter">
                <NoteForm adaugaComentariu={ this.adaugaComentariu }/>
            </div> 
        </div>
        </ContextContext>
      </BrowserRouter>
    );
  }
}

export default App;
