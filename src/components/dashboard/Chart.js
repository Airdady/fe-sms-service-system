import React, {useEffect, useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import service from '../../service'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

export default function Chart() {
  const theme = useTheme();
  const [work, setwork] = useState([])

  useEffect(() => {
    data()
  }, [])

  const data = async () => {
    const work = await service.getStats()
    setwork(work.data.data)
  }
  

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart width={500} height={300} data={work}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="sms" stroke="#8884d8" />
          <Line type="monotone" dataKey="verify" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}