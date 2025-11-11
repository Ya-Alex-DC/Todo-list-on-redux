import { createStore } from 'redux'
import { reducer } from './reducer'
import { State, Action } from '../type'
import { Store } from 'redux'

export const store: Store<State, Action> = createStore(reducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch