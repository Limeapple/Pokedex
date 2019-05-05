import React from 'react'
import Main from './Main'
class Navbar extends React.Component{
  //value is a variable that determines which tab or search bar is clicked on the navbar.
  //value will help Main.js know what page to display when either pokedex, name, type, or search pokemon is in use
  //userInput gives the state control over the user's input in the search bar located in the navbar
  state={
    value:1,
    userInput:"",
    input:0
  }
  //function that changes "value" when clicked, used to help Main.js know what to display based on what is clicked on the Navbar
  //also resets the search bar input
  handleClick=(e)=>{
    this.setState({
      value:e.target.value,
      userInput:"",
      input:0
    })
  }
  //allows state control of userInput, sets value of input to 4 when clicked to tell Main.js the user wants to search a pokemon
  handleChange=(e)=>{
    this.setState({
      userInput:e.target.value,
      input:4
    })
  }
  
  render(){
    return (
      <div className="Navbar">
      <nav style={container}>
        <ul style={ul}>
          <li style={li} onClick={this.handleClick} value="1">Pokedex</li>
          <li style={li} onClick={this.handleClick} value="2">Name</li>
          <li style={li} onClick={this.handleClick} value="3">Type</li>
        </ul>
        <input style={input} type="search" placeholder="Search Pokemon"
         onChange ={this.handleChange} value={this.state.userInput}/>
      </nav>
      <Main
        PokeName={this.props.PokeName}
        SortPokeName={this.props.SortPokeName}
        value={this.state.value}
        userInput={this.state.userInput}
        input={this.state.input}
      />
      </div>
    )
  }
}
const container={
  position:"fixed",
  width:"100%",
  display:"flex",
  background: "tomato",
  fontSize: "15px",
  padding:"0px 7px 0px 7px"
}
 const ul={
  display: "flex",
  listStyle: "none"
}
const li={
  margin:"5px 20px 5px 0px"
}

const input={
 marginLeft:"auto",
 alignSelf:"center",
 borderRadius: "3px",
 height:"20px",
 width:"120px",
 border: "none"
}
export default Navbar
