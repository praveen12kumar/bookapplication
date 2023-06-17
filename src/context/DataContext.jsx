import {createContext} from "react";
import { products } from "../db";
import { useReducer } from "react";
import { dataReducer } from "../reducers/Reducer";
export  const DataContext = createContext();

export const DataProvider = ({children})=>{
    
    const initialState = {
        products: [...products],
        search:"",
        category:""
      };

    const [state, dispatch] = useReducer(dataReducer, initialState);
    console.log("products",products)
    
    return(
        <DataContext.Provider value={{
            products:state.products,
            dataDispatch:state.dispatch,
            search:state.search, 
            category:state.category}}>
            {children}
        </DataContext.Provider>
    )
}