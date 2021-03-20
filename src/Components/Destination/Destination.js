import React, { useContext, useState } from 'react';
import  
img from '../../images/Map.png';
import fakeData from '../../data/searchData.json';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Destination.css'
const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [location,setLocation]=useState({
        from:'',
        to:''
    })
console.log(fakeData);

const {name}=useParams();
const showRideList = fakeData.filter(single => {return single.name===name} )

console.log(showRideList)
   




    const ridersLocation=(e)=>{
        const newLocation={...location};
        newLocation[e.target.name]=e.target.value;
        setLocation(newLocation);
        console.log(newLocation);

    }
    return (
        <div>
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-4">

                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Form:</label>
                                <input type="email"  onBlur={ridersLocation}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">To:</label>
                                <input type="name" onBlur={ridersLocation} class="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" class="btn btn-primary">Search</button>
                        </form>

                   <div  className="rider-list">
                   {
                           showRideList.map(dt => {
                              
                              return <div>

                                 <h3 >{dt.name}  ${dt.price }  {dt.quantity}</h3>
                                

                                   </div>
                            
                           })
                        }
                   </div>
                      
                    
            

                        </div>


                        <div className="col-md-4">
                        <img src={img} alt=""/>




                    </div>
                </div>

            </div>

        </div>
    );
};

export default Destination;