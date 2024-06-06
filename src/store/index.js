import {createStore} from "redux"

// Initial value of the store 
const initial_value = {
    counter:0
}

// Decalaration of Reducer
const counterReducer = (store=initial_value, action) => {
    
    if (action.type === "INCREMENT"){
        return {...store,counter:store.counter+1}
    }
    else if (action.type === "DECREMENT"){
        return {...store,counter:store.counter-1}
    }
    else if(action.type ==="ADD"){
        return {...store,counter:store.counter + Number(action.payload.num)}
    }
    else if(action.type === "SUB"){
        return {...store,counter:store.counter - Number(action.payload.num)}
    }
    console.log("Action received",action)
    return store
}

// Declaration of Store
const counterStore = createStore(counterReducer)


export default counterStore