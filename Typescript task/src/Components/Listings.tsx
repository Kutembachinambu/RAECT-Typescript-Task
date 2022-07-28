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
};



const PropertyList = (props: IProperties) => {
    const { properties} = props.PropertyData;
    const navigate = useNavigate();

    

    return (
        
            <div>
                {properties.map((property) => (
                    <div key={property.id}>
                        <div>
                        <ul className="properties">
                            <li><button onClick={()=>navigate('/About', { state: {id:1, text: "Hello World!"} })}><img src={property.image} alt="House" /></button>
                            <div>{property.location}</div>
                            <div id="distance">{property.distance}</div>
                            <div className='specs'>
                                <li><img src={property.bdrmImg} alt="bed" /><span className="three">{property.bdrmQty}</span></li>
                                <li><img src={property.bthrmImg} alt="bathroom" /><span className="three">{property.bthrmQty}</span></li>
                                <li><img src={property.toiletImg} alt="toilet" /><span className="three">{property.toiletQty}</span></li>
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
            toiletImg:toilet

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
                toiletImg:toilet
    
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
                    toiletImg:toilet
                
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
                        toiletImg:toilet
                        
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
                            toiletImg:toilet
                
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
                                toiletImg:toilet
                            
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
                                toiletImg:toilet
                                
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
                                    toiletImg:toilet
                        
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
                                        toiletImg:toilet
                            
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
                                            toiletImg:toilet
                                
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



