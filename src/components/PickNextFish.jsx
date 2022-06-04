import React , {useState} from 'react'
import styled from "styled-components";
import useFetch from "./useFetch";
import { useParams } from 'react-router-dom';



const PickNextFish = (props) => {
    console.log("fisharray picknext", props.array)

    const [currentFish, setCurrentFish] = useState([])
    
    if(props.fish !== ""){
        console.log("now next", props.fish)
        setCurrentFish(props.fish)
    }
    else{
       console.log( "no fish sent yet")
       setCurrentFish(props.array[0])
    }
    console.log("current fish next fish", currentFish)

    return(
        currentFish
    )

}


export default PickNextFish


