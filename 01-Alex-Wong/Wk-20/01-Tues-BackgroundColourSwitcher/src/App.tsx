import React, { useState } from 'react'
import './App.css'

// colours.vals here are html class names
const colours = {
  red: "red",
  white: "white",
  blue: "blue",
  yellow: "yellow"
} as const;
type ColourKeys = keyof typeof colours;
type ColourVals = typeof colours[ColourKeys];

export default function App() {
  const [colour, setColour] = useState(colours.white as ColourVals);
  const colourList = Array.from(Object.values(colours)) as ColourVals[];
  const colourPickers = colourList.map((val)=>{
    return <ColourPicker colour={val} setColour={setColour}/>
  })
  return (
    <div className={`App ${colour}`}>
      {colourPickers}
    </div>
  )
}

interface ColourPickerProps{
  colour: ColourVals,
  setColour: React.Dispatch<React.SetStateAction<ColourVals>>
}
function ColourPicker(props: ColourPickerProps){
  const {colour, setColour} = props;
  function handleClick(){
    setColour(colour);
  }
  return(
    <div className={`colourPicker ${colour}`} onClick={handleClick}>
    </div>
  )
}

