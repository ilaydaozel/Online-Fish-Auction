import React from 'react'
import './emailDoesntExistNotification.css'
import CancelIcon from '@mui/icons-material/Cancel';




function emailDoesntExistNotification(props) {

    
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (

        <div className="emailDoesntExistNotification">
            <div className="emailDoesntExistNotification-inner">
                <div className="fail">
                    <CancelIcon style={styles.activity}></CancelIcon>
                    <h4 style={{color: 'white'}}>Bu e-mail kayıtlı değil! Lütfen tekrar deneyin.</h4>
                </div>
                
            </div>
        </div>
  ) : "";
}


export default emailDoesntExistNotification