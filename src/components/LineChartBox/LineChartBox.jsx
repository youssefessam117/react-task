import React, { useEffect, useState } from 'react'
import { getData } from '../../api/api.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LineChartBox() {
  const [lineData, setlineData] = useState([])
  let  getCurrncy = async ()=>{
      let  data  = await getData();
      setlineData(data);
      console.log(data);
  }
  useEffect(() => {
    // getCurrncy()
  }, [])
  const data = [
    {
      "name": "Page A",
      "rate": 4000,
      "pv": 2400
    },
    {
      "name": "Page A",
      "rate": 4000,
      "pv": 2400
    },
    {
      "name": "Page A",
      "rate": 4000,
      "pv": 2400
    },
    {
      "name": "Page A",
      "rate": 4000,
      "pv": 2400
    },
  ]
  
  return (
    <>
    <div class="text-bg-secondary p-3">Line Chart </div>
    {data.length > 0 ? 
        <div className='bg-light'>
          <LineChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
        </LineChart>
        </div>
      :<p>no data available </p>}
    </>
  )
}
