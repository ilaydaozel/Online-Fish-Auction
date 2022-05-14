import Navbar from "../components/Navbar"
import FishForm from "../components/FishForm"
import styled from "styled-components"

const Container = styled.div`

`

const AddFish = () => {
  return (
    <Container>
        <Navbar />
        <FishForm />
    </Container>
  )
}

export default AddFish