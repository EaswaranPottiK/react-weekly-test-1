import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

function App() {
  function changeStyletoGreen(event){
    event.target.style.backgroundColor='green'
  }

  function changestyleback(e){
    e.target.style.backgroundColor='#116BB4'
  }

  const [length,setLenght] = useState(0)
  const setLenghtChange = (num) =>{
    setLenght(num)
  } 

  const [capital,setCapital] = useState(false)
  const capitalChange = () =>{
    setCapital(!capital)
  } 

  const [small,setSmall] = useState(false)
  const smallChange = () =>{
    setSmall(!small)
  } 

  const [number,setNumber] = useState(false)
  const numberChange = () =>{
    setNumber(!number)
  } 

  const [symbol,setSymbol] = useState(false)
  const symbolChange = () =>{
    setSymbol(!symbol)
  }

  function generateKey(){
    if ((length<8)||(length>50)){
      alert('Length out of mentioned range')
    }
    else if(capital===false && small===false && number===false && symbol===false){
      alert('None of option ie Capital letter, small letter, number, symbols selected')
    }
    else{
      let str =''
      if(capital){
        str += 'QWERTYUIOPLKJHGFDSAZXCVBNM'
      }
      if (small){
        str += 'qwertyuioplkjhgfdsazxcvbnm'
      }
      if (number){
        str += '1234567890'
      }
      if (symbol){
        str += '`~!@#$%^&*()}{][;/?.,<'
      }

      let key =''
      for (var i=0; i<length; i++){
        key += str.charAt(Math.floor(Math.random()*str.length))
      }
      document.getElementById('key').value=key
    }
  }

  function copyText(){
    const key = document.getElementById('key').value;
    if (key==''){
      alert('Nothing to copy !')
    }
    else{
      navigator.clipboard.writeText(key);
    }
  }

  return (
    <div style={{marginLeft:'5%', marginRight:'5%'}}>

      <h1 style={{margin:'20px',textAlign:'center'}}>Password Generator</h1>
      <div style={{display:'flex'}}>
      <input id="key" type='text' style={{width:'100%',height:'3vh', backgroundColor:'#F8F8F8', border:'1px solid #D4D4D4'}} value={""}></input>
      <span class="material-symbols-outlined" onClick={copyText}>file_copy</span>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <p>Select Password length <b>(**8-50 characters**)</b></p>
        <input type='text' onChange={(e)=>setLenghtChange(e.target.value)}></input>
      </div>
      {/* onChange={setCapitalLetter(!captialLetter)} */}
      <input type='checkbox' onChange={capitalChange}></input>
      <label for="capitalLetter">Include upper case</label>
      <br></br>

      <input type='checkbox' onChange={smallChange}></input>
      <label for="smallLetter">Include lower case</label>
      <br></br>

      <input type='checkbox' onChange={numberChange}></input>
      <label for="number">Include numbers</label>
      <br></br>

      <input type='checkbox' onChange={symbolChange}></input>
      <label for="symbols">Include symbols</label> 
      <br></br><br></br>

      <button onClick={generateKey} onMouseOver={(e)=>changeStyletoGreen(e)} onMouseLeave={(e)=>changestyleback(e)} style={{width:'100%',height:'6vh' ,color:'white',backgroundColor:'#116BB4',border:'none',cursor:'pointer'}} className='btn' >Generate Password</button>
    </div>
  );
}
export default App;
