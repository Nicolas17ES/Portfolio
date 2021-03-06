import {createContext, useReducer} from 'react'
import gamesReducer from './GamesReducer'


const GamesContext = createContext();

export const GamesProvider = ({children}) => {
    const initialState = {
        rockStatus: null,
        rockSelectedElement: null,
        rockDisplayResult: false,
        randomNumber: null,
    }
    const [state, dispatchGames] = useReducer(gamesReducer, initialState)

    return <GamesContext.Provider value={{
        rockStatus: state.rockStatus,
        rockSelectedElement: state.rockSelectedElement,
        rockDisplayResult: state.rockDisplayResult,
        randomNumber: state.randomNumber,
        dispatchGames,
    }}>
        {children}
    </GamesContext.Provider>
}

export default GamesContext 