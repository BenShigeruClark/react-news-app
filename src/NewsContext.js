import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "04689433bdbf4fbeb2b142976a2cdc9c";

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
            )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, [data]);

    return(
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    )
}