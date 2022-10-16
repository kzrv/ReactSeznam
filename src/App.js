import logo from './logo.svg';
import './App.css';
import ListItem from "./components/list/ListItem";
import {useState} from "react";
import Error from "./components/Error";

function App() {
    const [items,setItems] = useState([{name : "Sekera", color : "red"}]);
    const [inputValue,setInputValue] = useState("");
    const [inputColor, setInputColor] = useState("");
  return (
    <div className="App">
        <h1>Seznam</h1>
        <input type={"text"} onChange={(event)=>{
            setInputValue(event.target.value);
        }}/>
        {/*<input type={"text"} onChange={event => {*/}
        {/*    setInputColor(event.target.value);*/}
        {/*}}/>*/}
        <select onChange={(el)=>{
            setInputColor(el.target.value);
        }}>
            <option>BLACK</option>
            <option>RED</option>
            <option>GREEN</option>
            <option>BLUE</option>
            <option>YELLOW</option>
        </select>
        <button onClick={()=>{
            items.push({name : inputValue, color: inputColor});
            setItems([...items]);

        }}>Vloz</button>
        {inputValue.length<5 && inputValue!=='' && <Error error={"Bad input"} message={"Input is too longer"}/>}
        <div>{inputValue}</div>
        {items.map((el,index)=><ListItem key={index} color={el.color} name={el.name}/>)}
    </div>
  )
}

export default App;
