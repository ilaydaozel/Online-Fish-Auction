import React from 'react'
import { useState, useEffect } from "react";
import './wrongPasswordNotification.css'
import CancelIcon from '@mui/icons-material/Cancel';




function wrongPasswordNotification(props) {

    
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (

        <div className="wrongPasswordNotification">
            <div className="wrongPasswordNotification-inner">
                <div className="fail">
                    <CancelIcon style={styles.activity}></CancelIcon>
                    <h4 style={{color: 'white'}}>Yanlış Şifre! Lütfen tekrar deneyin.</h4>
                </div>
                
            </div>
        </div>
  ) : "";
}


export default wrongPasswordNotification