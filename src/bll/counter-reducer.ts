const initialState = {
    maxValue:5,
    startValue:1,
    count: 1,
    isActive:true
}
export type InitialStateType = typeof initialState


export const counterReducer = (state:InitialStateType=initialState,action:ActionsType):InitialStateType => {
    switch(action.type){
        case 'SET_MAX_VALUE':
            return {...state,maxValue: action.value}
        case 'SET_START_VALUE':
            return {...state,startValue: action.value}
        case 'INC_VALUE':
            return {...state,count:state.count+1}
        case 'RESET_VALUE':
            return {...state,count:state.startValue}
        case 'ON_OFF_INPUT':
            return {...state,isActive: !state.isActive}
        default:
            return state
}
}


export const setMaxValueAC = (value:number) => ({type:'SET_MAX_VALUE',value} as const)
export const setStartValueAC = (value:number) => ({type: 'SET_START_VALUE',value} as const)
export const incValueAC = () => ({type:'INC_VALUE'} as const)
export const resetValueAC = () => ({type:'RESET_VALUE'} as const)
export const onOffInputAC = () => ({type: 'ON_OFF_INPUT'} as const)

type SetMaxValueAT = ReturnType<typeof setMaxValueAC>
type SetStartValueAT = ReturnType<typeof setStartValueAC>
type incValueAT = ReturnType<typeof incValueAC>
type resetValueAT = ReturnType<typeof resetValueAC>
type onOffInputAT = ReturnType<typeof onOffInputAC>
export type ActionsType = SetMaxValueAT | SetStartValueAT | incValueAT | resetValueAT | onOffInputAT


