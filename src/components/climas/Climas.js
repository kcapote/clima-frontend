import React, { useState, useEffect, Fragment } from 'react';
import Clima from './Clima';
import Spinner from '../spinner/Spinner';
import socketIOClient from "socket.io-client";
const endpoint = `https://infinite-fortress-26929.herokuapp.com`;

let socket;
let intervalo;

const Climas = () => {
     
    const [ climas, guardarClimas ] = useState([]);
    const [ cargando, guardarCargando ] = useState(false);
    const [ seg, setSegundo ] = useState(0);
    const [ primeraVez, guardarPrimeraVez ] = useState(true);

    useEffect(() => {
        socket = socketIOClient(endpoint);
        cargarClimas();
        return () => {
            socket.close(); 
            clearInterval(intervalo);
        }
    }, []);


    useEffect(()=>{

        if (primeraVez) return;

        let time = 0;
        clearInterval(intervalo);

        setTimeout(() => {
           cargarClimas();
        }, 10000);

        intervalo = setInterval(()=>{
            time = time +1;
            setSegundo(time);
        }, 1000);

    },[climas]);



    const cargarClimas = () => {
        guardarCargando(true);
        socket.emit('cargarClimas', {}            
        ,(climas) => {
            if(climas){
                guardarPrimeraVez(false);
                guardarClimas(climas);
            }else{
                guardarPrimeraVez(false);
                guardarClimas([]);
            }
            guardarCargando(false);
        });

    };
    
    if(cargando){
        return <Spinner/>
    }else{
        return (
            <Fragment>
                <h1 className="mt-5">Climas - <small>Segundos desde la última actualización { seg } </small>  </h1>
                <div className="row mt-5">
                    {climas.length>0 && !climas[0].code ? 
                    climas.map( clima =>    
                        <Clima key={clima.horaFormateada} clima={clima}/>
                    )
                    :
                        <div>Sin datos para mostrar !!! </div>
                    }
                </div>                
            </Fragment>
        );
    }
}
 
export default Climas;