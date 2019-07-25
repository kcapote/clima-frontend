import React, { useState, useEffect, Fragment } from 'react';
import Clima from './Clima';
import Spinner from '../spinner/Spinner';
import socketIOClient from "socket.io-client";
const endpoint = '127.0.0.1:3001';
const socket = socketIOClient(endpoint);
let intervalo;

const Climas = () => {
     
    const [ climas, setClimas ] = useState([]);
    const [ cargando, setCargando ] = useState(false);
    const [ seg, setSegundo ] = useState(0);

    useEffect(()=>{
        let time = 0;
        clearInterval(intervalo);

        setTimeout(() => {
           cargarClimas();
        }, 10000);

        intervalo = setInterval(function(){
            time = time +1;
            setSegundo(time);
        }, 1000);

        
        
      
    },[climas]);


    // function myFn() {console.log('idle');}
    // var myTimer = setInterval(myFn, 4000);
    // // Then, later at some future time, 
    // // to restart a new 4 second interval starting at this exact moment in time
    // clearInterval(myTimer);
    // myTimer = setInterval(myFn, 4000);

    const cargarClimas = () => {
        console.log('cargando clima');
        setCargando(true);
        socket.emit('cargarClimas', {}            
        ,(climas) => {
            setClimas(climas);
            setCargando(false);
        });  

    };
    
    if(cargando){
        return <Spinner/>
    }else{
        return (
            <Fragment>
                <h1 className="mt-5">Climas - <small>Segundos desde la última actualización { seg } </small>  </h1>
                <div className="row mt-5">
                    {climas.map( clima =>    
                        <Clima key={clima.horaFormateada} clima={clima}/>
                    )}
                </div>                
            </Fragment>
        );
    }
}
 
export default Climas;