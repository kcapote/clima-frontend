import React, { Component } from 'react';
import axios from 'axios';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Spinner from '../spinner/Spinner';
const APY_KEY = process.env.REACT_APP_API_MAP_KEY;
const endpoint = `https://infinite-fortress-26929.herokuapp.com/climas`;
class Mapas extends Component {
    state = { 
        climas: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        cargando: false
    }

    mapStyles = {
        width: '100%',
        height: '100%',
    };
    
    componentDidMount = async () => {
        this.setState({...this.state, cargando: true});
        const resp =  await axios.get(endpoint);
        this.setState({
            ...this.state,
            climas: resp.data.climas
        }, ()=>{
            this.setState({...this.state, cargando: false});
        });
    }


    onMarkerClick = (props, marker, e) => {

        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };
 
    onMapClicked = (props) => {
        console.log('en el onMapClicked');        
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        };
    };

    render() { 
        if(this.state.cargando){
            return <Spinner/>
        }

        return ( 
        <div className="row justify-content-center">
            <Map
                google={this.props.google}
                initialCenter={{
                lat: 0.625221, 
                lng: -24.386357
                }}
                zoom={2}
                onClick={this.onMapClicked}
            >
                {this.state.climas.map( (clima, index) =>( 
                    
                    <Marker
                        key={index}
                        title={ clima.timezone }
                        summary={ clima.summary }
                        temperature ={ Math.ceil( clima.temperature) }
                        position={ { lat: clima.lat, lng: clima.lng } } 
                        onClick={this.onMarkerClick}/>                       
            
                ))}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                        <div>
                            <h2>{ this.state.selectedPlace.temperature } °C</h2>
                            <h3>{ this.state.selectedPlace.title }</h3>
                            <h5> { this.state.selectedPlace.summary }</h5>
                        </div>
                </InfoWindow>

            </Map>
        </div>
        );
    }    
}
 
export default GoogleApiWrapper({
    apiKey: (APY_KEY),
    LoadingContainer: Spinner
  })(Mapas);


