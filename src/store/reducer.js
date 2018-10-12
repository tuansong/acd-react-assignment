const initialState = {
    result: ""
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        // Get input actions
        case 'GET_INPUT': {
            return {
                ...state,
                result: state.result + action.data
            }
        }
        // Remove item action
        case 'REMOVE_ITEM': {
            let currentString = state.result;
            let cuttedString = currentString.slice(0, currentString.length - 1);
            return {
                ...state,
                result: cuttedString
            }
        }
        // Get match character actions
        case 'ADD': {
            return {
                ...state,
                result: state.result + "+"
            }
        }
        case 'MINUS': {
            return {
                ...state,
                result: state.result + "-"
            }
        }
        case 'MULTIPLY': {
            return {
                ...state,
                result: state.result + "*"
            }
        }
        case 'DEVIDE': {
            return {
                ...state,
                result: state.result + "/"
            }
        }
        // Do math action
        case 'EQUAL': {
            console.log(state.result);
            let result = state.result;
            let newResult = eval(result).toString();
            console.log(newResult);
            return {
                ...state,
                result: newResult
            }
        }
    }
    return state
}

export default reducer;