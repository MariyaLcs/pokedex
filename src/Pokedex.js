import React from 'react';
import Pokecard from "./Pokecard"
import {Pokermon} from "./Pokecard"

import "./Pokerdex.css"

function Pokerdex(props) {
    render(){
        <div> 
            <Pokecard {props.id}/>
        </div>
    }
  }


export default Pokerdex;