import React from "react"
import Navbar from "../Homepage/Navbar"
class Stats extends React.Component{
  state={
    PokeName:[],
    SortPokeName:[],
  }

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
  render(){
    return (
      <div className="grid">
        <div className="nav"/>
        <div className="pic"/>
        <div className="stat"/>
        <div className="desc"/>
        <div className="tab"/>
        <div className="info"/>
      </div>
    )
  }
}
export default Stats
