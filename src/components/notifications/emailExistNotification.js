import React from 'react'
import { useState, useEffect } from "react";
import './emailExistNotification.css'
import CancelIcon from '@mui/icons-material/Cancel';




function emailExistNotification(props) {

    
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (

        <div className="emailExistNotification">
            <div className="emailExistNotification-inner">
                <div className="fail">
                    <CancelIcon style={styles.activity}></CancelIcon>
                    <h4 style={{color: 'white'}}>Bu email zaten kayıtlı! Lütfen farklı bir e-mail deneyin.</h4>
                </div>
                
            </div>
        </div>
  ) : "";
}


export default emailExistNotification