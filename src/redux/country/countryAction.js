import { CHANGE_COUNTRY, CHANGE_COUNTRIES_DATA, CHANGE_COUNTRY_SELECTED_CODE, CHANGE_COUNTRY_INFO } from "../containt"

export const changeCountry = (country) => {
  return {
    type: CHANGE_COUNTRY,
    payload: country
  }
}

export const changeCountriesData = (countries) => {
  return {
    type: CHANGE_COUNTRIES_DATA,
    payload: countries
  }
}

export const changeCountrySelectedCode = (countryCode) => {
  return {
    type: CHANGE_COUNTRY_SELECTED_CODE,
    payload: countryCode
  }
}

export const changeCountryInfo = (country) => {
  return {
    type: CHANGE_COUNTRY_INFO,
    payload: country
  }
}