import React from 'react'
import { useState, useEffect } from "react";
import './loginSuccessNotification.css'
import CheckCircleSharpIcon from '@mui/icons-material/Cancel';




function loginSuccessNotification(props) {

    
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (

        <div className="loginSuccessNotification">
            <div className="loginSuccessNotification-inner">
                <div className="done">
                <CheckCircleSharpIcon style={styles.activity}></CheckCircleSharpIcon>
                    <h4 style={{color: 'white'}}>Giriş Başarılı!</h4>
                </div>
                
            </div>
        </div>
  ) : "";
}


export default loginSuccessNotification