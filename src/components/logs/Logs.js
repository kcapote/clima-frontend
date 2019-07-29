import React, {useState, useEffect} from 'react';
import axios from 'axios';
const endpoint = `https://infinite-fortress-26929.herokuapp.com/erroresLogs`;

const Logs = () => {

    const [logs, guardarLogs] = useState([]);

    useEffect( () => {
        const cargarErrores = async () => {
            const respuesta = await axios.get(endpoint);
            const {logs} = respuesta.data; 
            guardarLogs(logs);
        };
        cargarErrores();

    },[])


    return ( 
            <div className="row">
                <h1 className="mt-5 col-12">Logs</h1>
                <ul className="mt-5 col-12">
                   {logs.map( (log, index )=> {
                    const fieldKey = Object.keys(log)[0];                     
                        return(<li key={index}>                        
                            <small>{ `${fieldKey}: ${log[fieldKey]} ` }</small>     
                        </li>
)                    })
                   }
                    
                
                </ul>

            </div> );
}
 
export default Logs;