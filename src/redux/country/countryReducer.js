import { CHANGE_COUNTRY, CHANGE_COUNTRIES_DATA, CHANGE_COUNTRY_SELECTED_CODE, CHANGE_COUNTRY_INFO } from "../containt";

const initialValue = {
  countrySelected: {},
  countriesData: [],
  countrySelectedCode: 'worldwide',
  countryInfo: {}
}

const countryReducers = ( state = initialValue, action ) => {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return {
        ...state,
        countrySelected: action.payload,
      }
    case CHANGE_COUNTRIES_DATA:
      return {
        ...state,
        countriesData: action.payload,
      }
    case CHANGE_COUNTRY_SELECTED_CODE:
      return {
        ...state,
        countrySelectedCode: action.payload,
      }
    case CHANGE_COUNTRY_INFO:
      debugger
      return {
        ...state,
        countryInfo: action.payload,
      }
    default:
      return state;
  }
}

export default countryReducers;