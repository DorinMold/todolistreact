import React, { useReducer } from 'react'
import './Diverse.css'
import { useState, useEffect } from 'react'

const reducer = (state, action) => {
    return {
        lista: [...state.lista, action.armatura]
    }
}

const styles = {
    style1 : {
        padding: '10px',
        borderRadius: '5px'
    },
    style2: {
        fontWeight: '800'
    }
}

const Diverse = (props) => {
const[pag, setPag] = useState(1) 
const[posts, setPosts] = useState([])
// const [state, dispatch] = useReducer(reducer, initialState, init)
const [obiect, delegator] = useReducer(reducer, { lista: ["element 1"]})

useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10').then(response => response.json())
    .then(json => {
        setPosts(json);
        console.log(json);
     })
}, [pag])    //se activeaza (sau se face refresh) doar cand pag (trecut ca al doilea parametru) se modifica SAU la incarcare

      return (
          <div id="diverse">
              <span>Din diverse</span>

              {
                  posts.map( p => <div className="posturi" key={p.id}><span>{p.id}</span><p> { p.title } </p> <small> { p.body } </small></div>)
              }

              <span> { obiect.lista[0] } </span> &nbsp;
              <button style={styles.style1} onClick={()=>delegator({type: "unu", armatura: "element 2"})}>Apasa pt useReducer </button>
              &nbsp;
              <span> { obiect.lista[1] } </span>
          </div>
      )
}

export default Diverse;