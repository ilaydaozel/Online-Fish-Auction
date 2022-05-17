import React from 'react'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 999;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: top;
    `
const Inner = styled.div`
    position: absolute;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: orange;
    text-align: center;
    border-radius: 16px;
    margin-top: 60px;`

const Message = styled.div`    
    color: white;
    text-align: center;
    padding: 16px;
`

const PositiveNotification = (props) => {
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (
        <Container>
            <Inner>
                <Message>
                    <CheckCircleSharpIcon style={styles.activity}></CheckCircleSharpIcon>
                    <h4 style={{color: 'white'}}>{props.message}</h4>
                </Message>
                
            </Inner>
        </Container>
  ) : "";
}


export default PositiveNotification