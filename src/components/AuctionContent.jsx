import styled from 'styled-components';
import React from 'react';
import Typography from '@mui/material/Typography';


const Container = styled.div`
    margin: 200px 0 0 0;
    display: flex;
    justify-content: center;
    
`

const AuctionContent = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom component="div"  sx={{fontWeight: 'bold', color: "orange" }}>Sitemiz şuan geliştirilmektedir.</Typography>
        </Container>


    )
  }

export default AuctionContent;