import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const App=()=>{
    let time=new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(time);
    const updateTime = () =>
    {
        let time=new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(  updateTime, 1000);
    return(
        <>
        <div>
       
        <h1> This is Digital Clock</h1>
    <h2>{ctime}</h2>
    </div>
        </>
    );
}

export default App;