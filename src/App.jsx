import { Container, Grid, Typography } from "@mui/material"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"
import { NewsProvider } from "./context/NewsProvider"


function App() {


  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />

        <footer>
          <Typography align='right' marginY={5} variant="body1" color="error">
            Made with ❤ by Daniel Reyes
          </Typography>
        </footer>
      </Container>
    </NewsProvider>
  )
}

export default App
