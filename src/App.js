import React, { Component } from 'react';
import Main from "./Components/Homepage/Main"
import Navbar from "./Components/Homepage/Navbar"
import Stats from "./Components/Poke-Info/Stats"
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"

class App extends Component {
  //PokeName stores the name of all the 151 pokemon  taken from api
  //SortPokeName sorts the name in PokeName
  state={
    PokeName:[],
    SortPokeName:[],
  }

  //api call to pokeapi and reads in the data
  componentDidMount(){
      let sortObj=[]
      //fetch the name and stores it in PokeName
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
          .then(api=>api.json())
          .then(data=>{
            this.setState({
              PokeName:data.results
            })
            //take sortObj and have it copy the names, then set sortObj equal to SortPokeName
            for(let i=0;i<151;i++)
            {
            sortObj.push(data.results[i].name+" "+(i+1))
            sortObj.sort();
           }
          })
          this.setState({
            SortPokeName:sortObj
          })

  }

  render() {

    return (
      <BrowserRouter>
      <Route path="/" exact render={()=><Navbar
               PokeName={this.state.PokeName}
               SortPokeName={this.state.SortPokeName}
                />}/>
    
      </BrowserRouter>
    );
  }
}

export default App;
