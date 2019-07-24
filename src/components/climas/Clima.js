import React from 'react';

const Clima = ({clima}) => {
    return (  
        <div className="row mt-5">
            <div className="col-12">
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
        </div>
    );
}
 
export default Clima;