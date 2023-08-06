type TIncCounter = ReturnType<typeof incCounterAC>
type TResetCounter = ReturnType<typeof resetCounterAC>
type TSetErrorMessage = ReturnType<typeof setErrorMessageAC>
type TResetErrorMessage = ReturnType<typeof resetErrorMessageAC>
type TSetMaxCount = ReturnType<typeof setMaxCountAC>
type TSetStartCount = ReturnType<typeof setStartCountAC>
type TToggleIsCorrectedValue = ReturnType<typeof isCorrectedValueAC>
type TSetCount = ReturnType<typeof setCountAC>


export type TActions =
    TIncCounter
    | TResetCounter
    | TSetErrorMessage
    | TResetErrorMessage
    | TSetMaxCount
    | TSetStartCount
    | TToggleIsCorrectedValue
    | TSetCount

const INC_COUNTER = 'INC-COUNTER'
const RESET_COUNTER = 'RESET-COUNTER'
const SET_START_COUNT = 'SET-START-COUNT'
const SET_MAX_COUNT = 'SET-MAX-COUNT'
const IS_CORRECTED_VALUE = 'IS-CORRECTED-VALUE'
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE'
const RESET_ERROR_MESSAGE = 'RESET-ERROR-MESSAGE'
const SET_COUNTER = 'SET-COUNTER'

export type TState = {
    max: number,
    start: number,
    count: number,
    error: string
    isCorrectedValue: boolean
}

const initialState: TState = {start: 0, count: 0, max: 5, error: '', isCorrectedValue: false}

export const countReducer = (state: TState = initialState, action: TActions): TState => {
    switch (action.type) {
        case INC_COUNTER:
            return {...state, count: state.count + 1}
        case SET_COUNTER:
            return {...state, count: action.count}
        case SET_START_COUNT:
            return {...state, start: action.startCount}
        case SET_MAX_COUNT:
            return {...state, max: action.maxCount}
        case RESET_COUNTER:
            return {...state, count: state.start}
        case IS_CORRECTED_VALUE:
            return {...state, isCorrectedValue: action.isCorrectedValue}
        case SET_ERROR_MESSAGE:
            return {...state, error: 'Incorrect Value'}
        case RESET_ERROR_MESSAGE:
            return {...state, error: ''}
        default:
            return state
    }
}
export const incCounterAC = () => ({type: INC_COUNTER} as const)
export const setCountAC = (count: number) => ({type: SET_COUNTER, count} as const)
export const resetCounterAC = () => ({type: RESET_COUNTER} as const)
export const setStartCountAC = (startCount: number) => ({type: SET_START_COUNT, startCount} as const)
export const setMaxCountAC = (maxCount: number) => ({type: SET_MAX_COUNT, maxCount} as const)
export const isCorrectedValueAC = (isCorrectedValue: boolean) => ({
    type: IS_CORRECTED_VALUE,
    isCorrectedValue
} as const)
export const resetErrorMessageAC = () => ({type: RESET_ERROR_MESSAGE} as const)
export const setErrorMessageAC = () => ({type: SET_ERROR_MESSAGE} as const)