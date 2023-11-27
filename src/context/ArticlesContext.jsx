import React, { useEffect, useState } from "react";
import { data } from "../mocks/api"

export const ArticlesContext = React.createContext({})

// Extener la funcionalidad del provider 

const ArticlesProvider = ({ children }) => {

    const [ user, setUser ] = useState('uriel_hedz')
    const [ articles, setArticle ] = useState([])

    const dataRepresent = {
        username: user,
        articles: articles
    }

    useEffect(() => {
        setArticle(data)
        console.log(data)
    }, [])

    return (
        <ArticlesContext.Provider value={ dataRepresent }>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesProvider;