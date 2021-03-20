import React, { useState } from 'react';
import background from '../../images/images.jpg'
import './Home.css';
import fakeData from '../../data/data.json'
import Vehicles from '../Vehicles/Vehicles';


const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }

   const [moto,setMoto]=useState(fakeData);

    
   
 


    return (
        <div style={{ backgroundImage:`url(${background})`}} className="background align-items-center ">
            
            <div>

            <div className="row  moto-style vehicle d-flex justify-content-between">
            {
                moto.map(moto => <Vehicles moto={moto}>

                </Vehicles>)
            }
            </div>
               
             
            </div>
           
        </div>
    );
};

export default Home;