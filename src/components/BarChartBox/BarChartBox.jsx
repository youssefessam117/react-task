import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { getBarData } from '../../api/api.js';

export default function BarChartBox() {
  const [chartData, setchartData] = useState([])
  let  getCurrncy = async ()=>{
      let  data  = await getBarData();
      setchartData(data);
      console.log(data);
  }
  useEffect(() => {
    // getCurrncy()
  }, [])

  const data = [
    {
      "EGP": 4000,
      "GBP": 4000,
      "EUR": 2400
    },
  ]
  return (
    <>
    <div class="text-bg-secondary p-3 p-3">Bar Chart </div>
    {data.length > 0 ? <div className='bg-light'> <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="EGP" fill="#8884d8" />
          <Bar dataKey="GBP" fill="#82ca9d" />
          <Bar dataKey="EUR" fill="#ffc658" />
        </BarChart></div>:<p>no data available</p>}
    </>
  )
}
