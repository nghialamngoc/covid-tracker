import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import LineGraph from '../LineGraph/index';
import Table from '../Table/index';
import { useSelector } from 'react-redux';

export default function TableData() {
  const countriesData = useSelector(state => state.country.countriesData);

  return (
    <Card>
      <CardContent>
        <h3>Live cases by Country</h3>
        <Table countries={countriesData}></Table>
        <h3>Worldwide new cases</h3>
        <LineGraph></LineGraph>
      </CardContent>
    </Card>
  )
}
