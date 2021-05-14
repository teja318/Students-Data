import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import studentsReducer from '../reducers/studentsReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        students: studentsReducer,
    }), applyMiddleware(thunk))
    return store
}
export default configureStore