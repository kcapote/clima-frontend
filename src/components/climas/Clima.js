import React from 'react';

const Clima = ({clima}) => {
    return (  
        <div className="col-4 my-2 mx-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        { clima.timezone }
                    </h5>
                    <p className="card-text">
                        { Math.ceil(clima.temperature) } °C
                    </p>
                    <p className="card-text">
                        { clima.summary }
                    </p>
                </div>
                <div className="card-footer">
                    <small>Hora: {clima.horaFormateada}</small>
                </div>    
            </div>        

        </div>
    );
}
 
export default Clima;