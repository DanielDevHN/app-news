import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NewsContext = createContext()



const NewsProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('technology')
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNoticias(data.articles)
        }
        consultarAPI()
    }, [categoria])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    return (
        <NewsContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}


export {
    NewsProvider,
}

export default NewsContext


