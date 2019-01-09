import { createStore } from 'redux'
import rootReducer from './rootRoducer'

const store = createStore(rootReducer)

export default store;