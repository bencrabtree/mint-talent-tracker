import React, { createContext, useEffect, useState } from "react";
import { http } from "../util/api";

const AppContext = createContext([{}, () => {}]);

const AppContextProvider = ({ children }) => {
    const [ state, setState ] = useState({
        fullRoster: []
    });

    useEffect(() => {

        const loadData = async () => {
            try {
                const { data: roster } = await http.get('/roster/all');

                setState({
                    fullRoster: roster
                })
            } catch (error) {
                console.log("Unable to set UserState:", error)
            }
        }

        loadData();
    }, []);

    return (
        <AppContext.Provider value={[ state, setState ]}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };