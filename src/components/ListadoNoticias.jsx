import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNews from '../hooks/useNews'
import Noticia from './Noticia'


const ListadoNoticias = () => {
    const { noticias } = useNews()

    console.log(noticias)

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia 
                    noticia={noticia}
                />
            ))}
        </Grid>
    </>
  )
}

export default ListadoNoticias
