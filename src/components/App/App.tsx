import { Container } from "@mui/material"
import Header from "../Header/Header"
import NewTweet from "../../containers/NewTweet/NewTweet"

function App() {


  return (
    <Container  maxWidth={false}>

      <Header/>
      <NewTweet/>
    </Container>
  )
}

export default App
