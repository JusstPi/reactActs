import React, { useState } from 'react';
import './App.css';
import { Button, Box } from '@mui/material';


var palette = [
  "#9253a1", "#f063a4", "#2dc5f4",
  "#fcee21", "#f16164", "#70327e",
  "#a42963", "#0b6a88", "#f89e4f",
].sort(() => Math.random() - 0.5);

var colors = [
  "#9253a1", "#f063a4", "#2dc5f4",
  "#fcee21", "#f16164", "#70327e",
  "#a42963", "#0b6a88", "#f89e4f",
].sort(() => Math.random() - 0.5);

let checker: string[] = [];
let count = 0;

function App() {
  const [color0, setColor0] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);
  const [color5, setColor5] = useState(false);
  const [color6, setColor6] = useState(false);
  const [color7, setColor7] = useState(false);
  const [color8, setColor8] = useState(false);

 function active(index: number){
  checker.push(colors[index])

  if(palette[count] === checker[count]){
    console.log("Correct match")
    count++;

    if(count === palette.length) {
      alert("Congratulations");
    }if(index === 0){
      setColor0(true)
    }else if(index === 1){
      setColor1(true)
    }else if(index === 2){
      setColor2(true)
    }else if(index === 3){
      setColor3(true)
    }else if(index === 4){
      setColor4(true)
    }else if(index === 5){
      setColor5(true)
    }else if(index === 6){
      setColor6(true)
    }else if(index === 7){
      setColor7(true)
    }else if(index === 8){
      setColor8(true)
    }
   } else {
      setColor0(false)
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(false)
      setColor5(false)
      setColor6(false)
      setColor7(false)
      setColor8(false)
      count = 0;
      checker = [];
    }
 }


  return (
    <div className='colorPalette'>
      <div className='colors'>
    {palette.map((item, index) => (
      <Box sx={{width: 30, height: 30, backgroundColor: `${item}` }} key={index}></Box>
              ))
          }</div>
    <div className='button_col'>
        <div className='button_col1'>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color0 === true) ? colors[0]:'#48AAAD'}` }} onClick={() => {active(0) }}></Button>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color1 === true) ? colors[1]:'#48AAAD'}` }} onClick={() => {active(1) }}></Button>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color2 === true) ? colors[2]:'#48AAAD'}` }} onClick={() => {active(2) }}></Button>
        <br/>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color3 === true) ? colors[3]:'#48AAAD'}` }} onClick={() => {active(3) }}></Button>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color4 === true) ? colors[4]:'#48AAAD'}` }} onClick={() => {active(4) }}></Button>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color5 === true) ? colors[5]:'#48AAAD'}` }} onClick={() => {active(5) }}></Button>
        <br/>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color6 === true) ? colors[6]:'#48AAAD'}` }} onClick={() => {active(6) }}></Button>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color7 === true) ? colors[7]:'#48AAAD'}` }} onClick={() => {active(7) }}></Button>
        <Button variant='contained' sx={{ width: 90, height: 50, margin: 0.3, bgcolor: `${(color8 === true) ? colors[8]:'#48AAAD'}` }} onClick={() => {active(8) }}></Button>
        </div>
        </div>
      </div>
  );
}

export default App;
