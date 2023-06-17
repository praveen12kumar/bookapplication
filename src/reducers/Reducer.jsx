export const dataReducer =  (state, {type, payload})=>{
    switch(type){
        case "search":
            return{
                    ...state, prodcuts:payload
            }
    }
}