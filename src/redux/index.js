import { createStore, combineReducers } from 'redux';
import countryReducer from './country/countryReducer';

const rootReducer = combineReducers({
  country: countryReducer
})

const store = createStore(rootReducer);

export default store;