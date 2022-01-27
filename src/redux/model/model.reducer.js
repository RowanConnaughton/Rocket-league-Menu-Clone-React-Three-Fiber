import { ModelActionTypes } from "./model.types";

const INTIAL_STATE = {

    currentModel: 'defualt',
    wheel: 'defualt',
    priColor: '',
    secColor: '',
    winColor: '',
    tireColor: '',
    rimColor: ''
    
}

const modelReducer = (state = INTIAL_STATE, action) => {

    switch(action.type){
        case ModelActionTypes.SET_CURRENT_MODEL:
            return{
                ...state,
                currentModel: action.payload
            }
        case ModelActionTypes.SET_CURRENT_WHEEL:
            return{
                ...state,
                wheel: action.payload
            }
        case ModelActionTypes.SET_CURRENT_PRICOLOR:
            return{
                 ...state,
                priColor: action.payload
            }
        case ModelActionTypes.SET_CURRENT_SECCOLOR:
            return{
                 ...state,
                 secColor: action.payload
            }
        case ModelActionTypes.SET_CURRENT_WINCOLOR:
            return{
                ...state,
                winColor: action.payload
            }
        case ModelActionTypes.SET_CURRENT_TIRECOLOR:
            return{
                ...state,
                tireColor: action.payload
            }
        case ModelActionTypes.SET_CURRENT_RIMCOLOR:
                return{
                    ...state,
                    rimColor: action.payload
                }

        default:
            return state;

    }
}

export default modelReducer;