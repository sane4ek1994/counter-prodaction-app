import {
    countReducer,
    incCounterAC,
    isCorrectedValueAC,
    resetCounterAC, resetErrorMessageAC,
    setErrorMessageAC, setMaxCountAC,
    setStartCountAC,
    TState
} from "./count-reducer";

let startState: TState

beforeEach(() => {
    startState = {start: 3, count: 0, max: 5, error: 'a', isCorrectedValue: false}
})
test('testing incCount function', () => {

    const action = incCounterAC()

    const endState = countReducer(startState, action)

    expect(endState.count).toBe(1)
})
test('testing resetCount function', () => {

    const action = resetCounterAC()

    const endState = countReducer(startState, action)

    expect(startState.count).toBe(0)
    expect(endState.count).toBe(3)
})
test('settings start count', () => {
    const action = setStartCountAC(5)

    const endState = countReducer(startState, action)

    expect(startState.start).toBe(3)
    expect(endState.start).toBe(5)
})
test('is corrected value', () => {
    const action = isCorrectedValueAC(true)

    const endState = countReducer(startState, action)

    expect(endState.isCorrectedValue).toBeTruthy()
    expect(startState.isCorrectedValue).toBeFalsy()
})
test('settings error message', () => {
    const action = setErrorMessageAC()

    const endState = countReducer(startState, action)

    expect(startState.error).toBe('a')
    expect(endState.error).toBe('Incorrect Value')
})
test('reset error message', () => {
    const action = resetErrorMessageAC()

    const endState = countReducer(startState, action)

    expect(startState.error).toBe('a')
    expect(endState.error).toBe('')
})

test('setting max count value', () => {
    const action = setMaxCountAC(10)

    const endState = countReducer(startState, action)

    expect(startState.max).toBe(5)
    expect(endState.max).toBe(10)
})





