import React, { useState, useEffect, Fragment } from 'react';
import Clima from './Clima';
import axios  from 'axios';
import Spinner from '../spinner/Spinner';

const Climas = () => {
     
    const [ climas, setClimas ] = useState([]);
    const [ cargando, setCargando ] = useState(false);
    useEffect(()=>{
        cargarClimas()
    },[]);

    const cargarClimas = async () => {
        setCargando(true);
        let respuesta ='';
        try{
            respuesta = await axios.get('http://localhost:3001/climas') ;
        }catch(err){
            console.log(err)
        }
        console.log(respuesta);            
        const {climas} = respuesta.data;        
        setClimas(climas);
        setCargando(false);
    };
    
    if(cargando){
        return <Spinner/>
    }else{
        return (
            <Fragment>
                <h1 className="mt-5">Climas</h1>
                {climas.map( clima =>    
                    <Clima key={clima.horaFormateada} clima={clima}/>
                )}                
            </Fragment>
        );
    }
}
 
export default Climas;