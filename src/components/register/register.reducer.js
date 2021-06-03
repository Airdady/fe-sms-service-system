import Type from './register.types'

const initialState = {
    user: {}
}

const registerData = (state = initialState, action)=> {
    switch(action.type){
        case Type.REGISTER:
            localStorage.setItem('user', JSON.stringify(action.createData))
            return {
                ...state,
                user: action.createData
            };
        case Type.DEACTIVATE: 
            return{
                ...state, user: {}
            };
        default: 
        return state
    }
}

export default registerData