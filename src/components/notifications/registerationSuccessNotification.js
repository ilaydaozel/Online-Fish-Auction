import React from 'react'
import { useState, useEffect } from "react";
import './registerationSuccessNotification.css'
import CheckCircleSharpIcon from '@mui/icons-material/Cancel';




function registerationSuccessNotification(props) {

    
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (

        <div className="registerationSuccessNotification">
            <div className="registerationSuccessNotification-inner">
                <div className="done">
                <CheckCircleSharpIcon style={styles.activity}></CheckCircleSharpIcon>
                    <h4 style={{color: 'white'}}>Kayıt Başarılı!</h4>
                </div>
                
            </div>
        </div>
  ) : "";
}


export default registerationSuccessNotification