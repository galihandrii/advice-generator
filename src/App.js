import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Advicecard from './components/Advicecard';

function App() {
const [advice,setAdvice] = useState({
  id:"",
  slip:"Click dice below to get advice"
})

const getAdvice = () => {
  
    axios.get("https://api.adviceslip.com/advice")
    .then((res)=>{
      setAdvice({
        id: res.data.slip.id,
        slip:res.data.slip.advice
      })
    })
    .catch((err)=> console.log(err));
  

}





  return (
    <div>
      <Advicecard onClick={getAdvice} id={advice.id} advice={advice.slip}/>
    </div>
  );
}

export default App;
