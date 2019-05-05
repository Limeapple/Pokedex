import React from "react"
import text from './data.js'
import { BrowserRouter , withRouter } from "react-router-dom";

//reads in a txt file of each of the Pokemon's type in order to display
const txt=text;
let arr=[], arr1=[], arr2=[];
for(let i=0;i<151;i++)
{
  arr.push(txt.pokemon[i].type)
  arr1.push([txt.pokemon[i].name,txt.pokemon[i].type])
  if(txt.pokemon[i].type.length==2)
  {
      arr2.push([txt.pokemon[i].type[1],txt.pokemon[i].type[0], txt.pokemon[i].name,txt.pokemon[i].id.toString()])
      arr2.push([txt.pokemon[i].type[0],txt.pokemon[i].type[1], txt.pokemon[i].name,txt.pokemon[i].id.toString()])
  }
  else
      arr2.push([txt.pokemon[i].type[0], "", txt.pokemon[i].name,txt.pokemon[i].id.toString()])
}

arr1.sort();
arr2.sort();
class SortByName extends React.Component{

  //function that displays the names of the pokemon on the screen, certain pokemon have exceptions with names, those are hard coded
  printName=(name)=>{
    return name=="mr-mime" ?
    <h2 >Mr. Mime</h2> :
     name=="nidoran-m" || name=="Nidoran ♂ (Male)"? <h2>Nidoran (M)</h2>:
     name=="nidoran-f" || name=="Nidoran ♀ (Female)" ? <h2>Nidoran (F)</h2>:
     name=="farfetchd" ? <h2>Farfetch'd</h2>:
    <h2>{name.toUpperCase().charAt(0)+name.slice(1)}</h2>
  }
  //images of the pokemon are pulled from a website. this method makes it where the url can be soft coded to display all the pokemon
  modifyUrl=(number)=>{
    let changeCounter="";
     if(number<10)
      changeCounter="00"+(number);
     else if(number<100)
      changeCounter="0"+(number);
    else
      changeCounter=(number).toString()
      return changeCounter;
  }

  displayPokemonType=(type1)=>{
    if(type1=="Grass")
      return <div className="grass" >{type1}</div>
    else if(type1=="Electric")
      return <div className="electric" >{type1}</div>
    else if(type1=="Fire")
      return <div className="fire" >{type1}</div>
    else if(type1=="Water")
      return <div className="water" >{type1}</div>
    else if(type1=="Bug")
      return <div className="bug" >{type1}</div>
    else if(type1=="Ice")
      return <div className="ice" >{type1}</div>
    else if(type1=="Poison")
      return <div className="poison" >{type1}</div>
    else if(type1=="Psychic")
      return <div className="psychic" >{type1}</div>
    else if(type1=="Fighting")
      return <div className="fighting" >{type1}</div>
    else if(type1=="Rock")
      return <div className="rock" >{type1}</div>
    else if(type1=="Flying")
      return <div className="flying" >{type1}</div>
    else if(type1=="Ground")
      return <div className="ground" >{type1}</div>
    else if(type1=="Normal")
      return <div className="normal" >{type1}</div>
    else if(type1=="Dragon")
      return <div className="dragon" >{type1}</div>
    else if(type1=="Ghost")
      return <div className="ghost" >{type1}</div>
  }
   PokeInfoPage=()=>{
    return this.props.history.push("/PokeInfo")
  }
  render(){
    return (
      <div style={App}>

    {
      this.props.SortPokeName.map((list,i)=>{
        let pokeInfo=list.split(" ");
        let name=pokeInfo[0];
        let number=pokeInfo[1];
        let style="http://www.serebii.net/pokemongo/pokemon/"+this.modifyUrl(number)+".png";
      return  <button style={container}>
        <h4><img style={size}src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG"/>{" "+number}</h4>
        <img src={style}/>
        {this.printName(name)}
          <div style={typeContainer}>
        {arr1[i][1].map((type)=>{
          let pokeType=type.split(" ")
          let type1=pokeType[0];
          return this.displayPokemonType(type1);
        })}
        </div>
        </button>

      })}
      </div>

    )
  }
}
const App={
  display:"flex",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "35px 0px 15px 0px"
}
const typeContainer={
  display:"flex",
  justifyContent:"center",
  marginTop:"5px"
}
const size={
  height:"10px",
  width:"10px"
}
const container={
  alignSelf: "flex-start",
  background:"white",
  textAlign:"center",
  margin:"3px",
  width:"180px",
  height:"200px",
  borderRadius:"8px",
  border:"none",
  boxShadow: "-1px 2px 13px -8px rgba(150,150,150,1)",
  cursor:"pointer"
}
export default withRouter(SortByName);
