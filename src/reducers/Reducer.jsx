import { products } from "../db";

export const dataReducer =  (state, {type, payload})=>{
    //console.log(products.filter((book)=> book.title === payload[0]).categoryName = payload[1]   )  ;
    switch(type){
        case "search":
            return{
                    ...state, search:payload
            }
        case "changeCategory":
            return{
                ...state, products:[products.find((book)=> book.title === payload[0]).categoryName = payload[1]] 
            }

        default : return state;
    }
}