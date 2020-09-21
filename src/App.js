
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import InfoBox from './components/InfoBox';
import Map from './components/Map';

import './App.css';
import "leaflet/dist/leaflet.css";
import TableData from './components/TableData';
import { sortData } from './util';
import { changeCountriesData, changeCountryInfo } from './redux/country/countryAction';

function App() {
  const countryInfo = useSelector(state => state.country.countryInfo);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const dispatch = useDispatch();

  const initCountriesData = useCallback(
    (data) => {
      dispatch(changeCountriesData(data))
    },
    [dispatch],
  );

  const initCountryInfo = useCallback(
    (data) => {
      dispatch(changeCountryInfo(data))
    },
    [dispatch],
  );
  useEffect(() => {
    const getcountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
          initCountriesData(sortData(data));
        })
        .catch(err => console.log('err', err))
    }
    getcountriesData();
  }, [initCountriesData]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        initCountryInfo(data);
      })
  }, [initCountryInfo]);

  return (

    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <Header></Header>
        </div>
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}></InfoBox>
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}></InfoBox>
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}></InfoBox>
        </div>
        <Map
          center={mapCenter}
          zoom={mapZoom}></Map>
      </div>
      <div className="app__right">
        <TableData></TableData>
      </div>
    </div>

  );
}

export default App;
