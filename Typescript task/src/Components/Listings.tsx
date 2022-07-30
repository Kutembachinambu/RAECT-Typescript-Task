import { type } from "@testing-library/user-event/dist/type";
import {Link, useNavigate} from 'react-router-dom';

import * as React from "react";
import '../App.css';
import boxhse from "../images/boxhse.jpg";
import smallhse from "../images/smallhse.jpeg";
import livingroom from "../images/livingroom.jpg";
import poolhse from "../images/poolhse.jpeg";
import kitchen from "../images/kitchen.jpg";
import bathrm from "../images/bath.png";
import bed from "../images/bed.jpg";
import toilet from "../images/toilet.png";


interface IProperties {
    PropertyData: PropertyDataType;
    logo?: string;
}

type PropertyDataType = {
    properties:PropertyType[];
}


type PropertyType = {
    id:number;
    image:string;
    location:string;
    distance:string;
    bdrmQty:number;
    bdrmImg:string;
    bthrmQty:number;
    bthrmImg:string;
    toiletQty:number;
    toiletImg:string;
    state:string;
};



const PropertyList = (props: IProperties) => {
    const { properties} = props.PropertyData;
    const navigate = useNavigate();

    

    return (
        
            <div>
                {properties.map((property, index) => (
                    <div key={property.id}>
                        <div>
                        <ul className="properties">
                            <li><button onClick={()=>navigate('/about', { state: properties[index] })}><img src={property.image} alt="House" /></button>
                            <ul className="state">
                                <li><div id="location">{property.location}</div></li>
                                <li><div className={property.state}>{property.state}</div></li>
                            </ul>  
                            
                            <p id="distance">{property.distance}</p>
                            <div className='specs'>
                                <ul>
                                <li><img src={property.bdrmImg} alt="bed" /><span className="three">{property.bdrmQty}</span></li>
                                <li><img src={property.bthrmImg} alt="bathroom" /><span className="three">{property.bthrmQty}</span></li>
                                <li><img src={property.toiletImg} alt="toilet" /><span className="three">{property.toiletQty}</span></li>

                                </ul>
                                
                            </div>
                           
                            <div>&#x20A6;30,000,000</div>
                            </li>
                        </ul>
                        </div>
                    </div>

                   

                ))}
            </div>
                
    );
                
};


const Listings = () => {
    const data: PropertyDataType = {
        properties: [
            {
            id:1,
            image: boxhse,
            location:"Lagos, NG",
            distance:"450 Kilometer away",
            bdrmQty:3,
            bdrmImg:bed,
            bthrmQty:3,
            bthrmImg:bathrm,
            toiletQty:3,
            toiletImg:toilet,
            state:"New"

            },
            {
                id:2,
                image: smallhse,
                location:"Lagos, NG",
                distance:"450 Kilometer away",
                bdrmQty:3,
                bdrmImg:bed,
                bthrmQty:3,
                bthrmImg:bathrm,
                toiletQty:3,
                toiletImg:toilet,
                state:"Serviced"
    
                },
                {
                    id:3,
                    image: livingroom,
                    location:"Lagos, NG",
                    distance:"450 Kilometer away",
                    bdrmQty:3,
                    bdrmImg:bed,
                    bthrmQty:3,
                    bthrmImg:bathrm,
                    toiletQty:3,
                    toiletImg:toilet,
                    state:"New"
                
                    },
                    {
                        id:4,
                        image: poolhse,
                        location:"Lagos, NG",
                        distance:"450 Kilometer away",
                        bdrmQty:3,
                        bdrmImg:bed,
                        bthrmQty:3,
                        bthrmImg:bathrm,
                        toiletQty:3,
                        toiletImg:toilet,
                        state:"New"
                        
                        },
                        {
                            id:5,
                            image: kitchen,
                            location:"Lagos, NG",
                            distance:"450 Kilometer away",
                            bdrmQty:3,
                            bdrmImg:bed,
                            bthrmQty:3,
                            bthrmImg:bathrm,
                            toiletQty:3,
                            toiletImg:toilet,
                            state:"Serviced"
                
                            },
                            {
                                id:6,
                                image: livingroom,
                                location:"Lagos, NG",
                                distance:"450 Kilometer away",
                                bdrmQty:3,
                                bdrmImg:bed,
                                bthrmQty:3,
                                bthrmImg:bathrm,
                                toiletQty:3,
                                toiletImg:toilet,
                                state:"New"
                            
                             },
                             {
                                id:7,
                                image: poolhse,
                                location:"Lagos, NG",
                                distance:"450 Kilometer away",
                                bdrmQty:3,
                                bdrmImg:bed,
                                bthrmQty:3,
                                bthrmImg:bathrm,
                                toiletQty:3,
                                toiletImg:toilet,
                                state:"New"
                                
                                },
                                {
                                    id:8,
                                    image: boxhse,
                                    location:"Lagos, NG",
                                    distance:"450 Kilometer away",
                                    bdrmQty:3,
                                    bdrmImg:bed,
                                    bthrmQty:3,
                                    bthrmImg:bathrm,
                                    toiletQty:3,
                                    toiletImg:toilet,
                                    state:"New"
                        
                                    },
                                    {
                                        id:9,
                                        image: smallhse,
                                        location:"Lagos, NG",
                                        distance:"450 Kilometer away",
                                        bdrmQty:3,
                                        bdrmImg:bed,
                                        bthrmQty:3,
                                        bthrmImg:bathrm,
                                        toiletQty:3,
                                        toiletImg:toilet,
                                        state:"Serviced"
                            
                                        },
                                        {
                                            id:10,
                                            image: kitchen,
                                            location:"Lagos, NG",
                                            distance:"450 Kilometer away",
                                            bdrmQty:3,
                                            bdrmImg:bed,
                                            bthrmQty:3,
                                            bthrmImg:bathrm,
                                            toiletQty:3,
                                            toiletImg:toilet,
                                            state:"Serviced"
                                
                                            }
        ],
    
};

    return (
        <div>
            <PropertyList PropertyData={data} />
        </div>
    );
};



export default Listings



