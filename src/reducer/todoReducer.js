const initialData = {
    list : []
}

const todoReducer = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TODO":
            const{ id, data } = action.payload;
            if(data){
                return {
                    ...state,
                    list:[
                        ...state.list, {
                            id:id,
                            data:data
                    }]
                }
            }

        // eslint-disable-next-line no-fallthrough
        case "GET_TODO":
            return {
                ...state,
                list: action.payload
            }


        case "DELETE_TODO":
            const newList = state.list.filter((ele,idx) => idx !== action.id)
            return {
                ...state,
                list:newList
            }

        case "EDIT_TODO":
        const editdata = state.list.map((ele,idx)=> idx === action.payload.indx ? action.payload : ele)
        return{
            ...state,
            list:editdata
        }
        
        default: return state;    
    }
}

export default todoReducer;