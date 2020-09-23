import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          schoolObj: ''
        };
      }
    render(){
      return (
        <div style={{ height: '40vh',width: '10%'}}>
          <Map
            google={this.props.google}
            zoom={12}
            initialCenter={{ lat: this.props.schoolObj.LATITUDE, lng: this.props.schoolObj.LONGITUDE}}
          >
              <Marker
                title={this.props.schoolObj.INSTNM}
                name={this.props.schoolObj.INSTNM}
                position={{ lat: this.props.schoolObj.LATITUDE, lng: this.props.schoolObj.LONGITUDE}} />
          </Map>
          </div>
      );
    }

  }
export default GoogleApiWrapper({
apiKey: 'AIzaSyDwu2QuB2sHrBp-pzBORDNLIu9ENWYArVA'
})(MapContainer);