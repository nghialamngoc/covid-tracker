import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCountryInfo, changeCountrySelectedCode } from '../../redux/country/countryAction';

export default function Header(props) {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);
  const countrySelectedCode = useSelector(state => state.country.countrySelectedCode);
  const dispatch = useDispatch();

  useEffect(() => {
    const getcountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
          const countries = data.map(country => {
            return {
              name: country.country,
              value: country.countryInfo.iso2
            }
          })
          setCountries(countries);
        })
        .catch(err => console.log('err', err))
    }

    getcountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url = countryCode === 'worlwide' ? 'https://disease.sh/v3/covid-19/all': `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(changeCountrySelectedCode(countryCode));
        dispatch(changeCountryInfo(data));
      })
  }
  return (
    <React.Fragment>
      <h1>COVID TRACKER</h1>
      <FormControl className="app__dropdown"></FormControl>
      <Select
        variant="outlined"
        value={countrySelectedCode} onChange={(e) => onCountryChange(e)}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
        {countries.map((country, index) => {
          return <MenuItem value={country.value} key={index}>{country.name}</MenuItem>
        })}
      </Select>
    </React.Fragment>
  )
}
