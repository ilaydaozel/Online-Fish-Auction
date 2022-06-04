import React , {useState} from 'react'
import styled from "styled-components";
import useFetch from "./useFetch";
import { useParams } from 'react-router-dom';



const PickNextFish = (props) => {

    console.log("pack",props.array)
    if(props.fish !== ""){
        console.log("now fish next", props.fish)
    }
    else{
       console.log( "no fish sent yet")
    }


    return(
        
        props.array[0]
    )

}


export default PickNextFish


