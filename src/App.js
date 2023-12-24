import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

function App() {
  const [captialLetter,setCapitalLetter]= useState(false)

  function changeStyletoGreen(event){
    console.log(event.target.style.backgroundColor='green')
  }

  function changestyleback(e){
    e.target.style.backgroundColor='#116BB4'
  }
  return (
    <div style={{marginLeft:'5%', marginRight:'5%'}}>

      <h1 style={{margin:'20px',textAlign:'center'}}>Password Generator</h1>
      <div style={{display:'flex'}}>
      <input type='text' style={{width:'100%',height:'3vh', backgroundColor:'#F8F8F8', border:'1px solid #D4D4D4'}} value={""}></input>
      <span class="material-symbols-outlined">file_copy</span>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <p>Select Password length <b>(**8-50 characters**)</b></p>
        <input type='text'></input>
      </div>
      {/* onChange={setCapitalLetter(!captialLetter)} */}
      <input type='checkbox'></input>
      <label for="capitalLetter">Include upper case</label>
      <br></br>

      <input type='checkbox'></input>
      <label for="smallLetter">Include lower case</label>
      <br></br>

      <input type='checkbox'></input>
      <label for="number">Include numbers</label>
      <br></br>

      <input type='checkbox'></input>
      <label for="symbols">Include symbols</label> 
      <br></br><br></br>

      <button onMouseOver={(e)=>changeStyletoGreen(e)} onMouseLeave={(e)=>changestyleback(e)} style={{width:'100%',height:'6vh' ,color:'white',backgroundColor:'#116BB4',border:'none',cursor:'pointer'}} className='btn' >Generate Password</button>
    </div>
  );
}
export default App;
