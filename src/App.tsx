import { Container } from "@mui/material"
import Header from "./components/Header/Header"
import NewTweet from "./components/NewTweet/NewTweet"

function App() {


  return (
    <Container className="tweets-simulator" maxWidth={false}>

      <Header/>
      <NewTweet/>
    </Container>
  )
}

export default App
