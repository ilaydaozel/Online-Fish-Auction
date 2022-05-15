import React from 'react'
import '../AddAuctionNotification.css'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';




function AddAuctionNotification(props) {

    
    setTimeout( () => {
        props.setTrigger(false);
    }, 2000);
    
    const styles = {
        activity: {height: 100, width: 100, color: 'white'}
    }

    return (props.trigger) ? (

        <div className="AddAuctionNotification">
            <div className="AddAuctionNotification-inner">
                <div className="done">
                    <CheckCircleSharpIcon style={styles.activity}></CheckCircleSharpIcon>
                    <h4 style={{color: 'white'}}>{props.message}</h4>
                </div>
                
            </div>
        </div>
  ) : "";
}


export default AddAuctionNotification