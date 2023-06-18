import {createContext} from "react";
import { products } from "../db";
import { useReducer } from "react";
import { dataReducer } from "../reducers/Reducer";
export  const DataContext = createContext();

export const DataProvider = ({children})=>{
    
    const initialState = {
        products: products,
        search:"",
        category:["currently-reading", "want-to-read", "read"]
      };

    const [state, dispatch] = useReducer(dataReducer, initialState);
   
    
    return(
        <DataContext.Provider value={{
            products:state.products,
            dataDispatch:dispatch,
            search:state.search, 
            category:state.category}}>

            {children}
        </DataContext.Provider>
    )
}