import {useReducer, useContext, createContext} from 'react'

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION_TYPES':
            // return state.concat(action.payload)
            return {...state, transactionTypes: action.payload};
        case 'GET_USE_TYPES':
            return {...state, useTypes: action.payload};
        case 'GET_STATES':
            return {...state, states: action.payload};
        case 'GET_CITIES':
            return {...state, cities: action.payload};
        case 'SET_ACTIVE_NAV_ITEM':
            return {...state, activeNavItem: action.payload};
        case 'SET_ACTION':
            return {...state, action: action.payload};
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
};

export const ResourcesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {});
    return (
        <CounterDispatchContext.Provider value={dispatch}>
            <CounterStateContext.Provider value={state}>
                {children}
            </CounterStateContext.Provider>
        </CounterDispatchContext.Provider>
    )
}

export const useResources = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)
