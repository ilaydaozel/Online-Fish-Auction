import React , {useState} from 'react'
import styled from "styled-components";
import useFetch from "./useFetch";
import { useParams } from 'react-router-dom';



const PickNextFish = (props) => {
    console.log("id", props.id)

    const url = 'http://localhost:8080/auction/getFishPackage/' + props.id;

    const { data: fishPackage, error, isPending } = useFetch(url);

    if(props.fish !== ""){
        console.log("now fish next", props.fish)
    }
    else{
       console.log( "no fish sent yet")
    }


    return(
        
        fishPackage[0]
    )

}


export default PickNextFish


