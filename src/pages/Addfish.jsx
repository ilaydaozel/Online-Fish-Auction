import Navbar from "../components/Navbar"
import FishForm from "../components/FishForm"
import styled from "styled-components"

const Container = styled.div`

`

const Addfish = () => {
  return (
    <Container>
        <Navbar />
        <FishForm />
    </Container>
  )
}

export default Addfish