import React from 'react';
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
const Vehicles = (props) => {
    const {name,image}= props.moto;
    let history= useHistory();

    const handleRide = () =>{
        history.push(`/destination/${name}`);
    }


    return (

        <div classNameName="col-md-4">
            <div className="card"  onClick ={handleRide}style={{width:'18rem'}} >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{name}</p>
              
            </div>
        </div>
        </div>

    );
};

export default Vehicles;